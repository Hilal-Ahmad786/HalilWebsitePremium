'use client';

import { useSyncExternalStore } from 'react';
import { GoogleTagManager } from './GoogleTagManager';
import { GoogleAnalytics } from './GoogleAnalytics';
import { FacebookPixel } from './FacebookPixel';

const STORAGE_KEY = 'araban-nakit-cookie-consent';
const CONSENT_EVENT = 'araban-nakit-consent-changed';
type Consent = 'accepted' | 'declined';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function getConsentSnapshot(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'accepted' || value === 'declined' ? value : null;
  } catch {
    return null;
  }
}

// Server always renders "undecided" (no localStorage there). React's useSyncExternalStore
// re-reads the client snapshot right after hydration and re-renders if it differs — the
// standard, effect-free way to read a browser-only store without a hydration mismatch.
const getServerConsentSnapshot = (): Consent | null => null;
const getClientTrue = () => true;
const getServerFalse = () => false;
const noopSubscribe = () => () => {};

function setConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore write failure — consent still applies for this page view via the dispatched event below
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function ConsentGate() {
  const consent = useSyncExternalStore(subscribe, getConsentSnapshot, getServerConsentSnapshot);
  const hydrated = useSyncExternalStore(noopSubscribe, getClientTrue, getServerFalse);

  return (
    <>
      {consent === 'accepted' && (
        <>
          <GoogleTagManager />
          <GoogleAnalytics />
          <FacebookPixel />
        </>
      )}
      {hydrated && consent === null && (
        // Bottom-left card on desktop (the floating Ara/WhatsApp buttons own
        // the bottom-right), offset above the mobile sticky CTA bar so the
        // two never overlap. Translucent by design — it's a disclosure, not
        // a wall — with a blur so it stays legible over any page content.
        <div
          role="dialog"
          aria-label="Çerez izni"
          className="fixed inset-x-4 bottom-[calc(88px+env(safe-area-inset-bottom))] z-[60] rounded-2xl border border-line/70 bg-surface/55 px-4 py-4 shadow-[0_10px_30px_rgba(22,24,23,.14)] backdrop-blur-md md:inset-x-auto md:left-6 md:right-auto md:bottom-6 md:w-[420px]"
        >
          <p className="text-xs leading-5 text-muted sm:text-sm">
            Size daha iyi hizmet sunmak için çerezler kullanıyoruz. Sitede gezinmeye devam ederek veya &quot;Kabul Et&quot;e tıklayarak çerez kullanımını onaylamış olursunuz.
          </p>
          <div className="mt-3 flex gap-2">
            <button type="button" onClick={() => setConsent('declined')} className="rounded-lg border border-line bg-surface/80 px-3.5 py-2 text-xs font-bold text-ink sm:text-sm">
              Reddet
            </button>
            <button type="button" onClick={() => setConsent('accepted')} className="button-primary px-3.5 py-2 text-xs sm:text-sm">
              Kabul Et
            </button>
          </div>
        </div>
      )}
    </>
  );
}
