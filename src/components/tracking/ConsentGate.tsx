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
        <div role="dialog" aria-label="Çerez izni" className="fixed inset-x-0 top-0 z-[60] border-b border-line bg-surface/98 backdrop-blur px-4 py-3 shadow-[0_10px_30px_rgba(22,24,23,.12)] sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-center text-xs leading-5 text-muted sm:text-left sm:text-sm">
              Size daha iyi hizmet sunmak için çerezler kullanıyoruz. Sitede gezinmeye devam ederek veya &quot;Kabul Et&quot;e tıklayarak çerez kullanımını onaylamış olursunuz.
            </p>
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={() => setConsent('declined')} className="rounded-lg border border-line px-3.5 py-2 text-xs font-bold text-ink sm:text-sm">
                Reddet
              </button>
              <button type="button" onClick={() => setConsent('accepted')} className="button-primary px-3.5 py-2 text-xs sm:text-sm">
                Kabul Et
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
