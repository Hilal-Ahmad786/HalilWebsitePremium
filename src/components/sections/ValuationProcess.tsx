import { FaCarSide, FaSearch, FaChartLine, FaWrench, FaHandHoldingUsd, FaArrowRight } from 'react-icons/fa';

const stages = [
  { icon: FaCarSide, title: 'Araç Bilgileri', copy: 'Marka, model, yıl ve kilometre bilgisi alınır.' },
  { icon: FaSearch, title: 'Hasar Analizi', copy: 'Hasarın konumu ve büyüklüğü incelenir.' },
  { icon: FaChartLine, title: 'Piyasa Değeri', copy: 'Hasarsız haldeki güncel değer referans alınır.' },
  { icon: FaWrench, title: 'Onarım / Parça Durumu', copy: 'Tahmini onarım maliyeti hesaba katılır.' },
  { icon: FaHandHoldingUsd, title: 'Nihai Teklif', copy: 'Tüm veriler birleştirilip net teklif sunulur.' },
] as const;

export function ValuationProcess({ title = 'Teklif Nasıl Belirleniyor?' }: { title?: string }) {
  return (
    <section className="site-container section-space">
      <p className="eyebrow">DEĞERLENDİRME SÜRECİ</p>
      <h2 className="display mt-4 text-4xl leading-tight">{title}</h2>
      <p className="mt-5 max-w-2xl leading-8 text-muted">
        Teklif, tek bir kalemle değil; aracın bilgileri, hasar durumu ve piyasa koşullarının birlikte değerlendirilmesiyle oluşturulur. Süreç aşağıdaki adımları izler.
      </p>
      <div className="mt-10 grid gap-0 border-t border-line sm:grid-cols-5">
        {stages.map(({ icon: Icon, title: stageTitle, copy }, index) => (
          <div key={stageTitle} className="relative flex flex-col gap-3 border-b border-line py-6 sm:border-b-0 sm:border-r sm:px-5 sm:py-2 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0">
            <Icon className="text-xl text-accent-ink" aria-hidden />
            <h3 className="display text-base leading-snug">{stageTitle}</h3>
            <p className="text-sm leading-6 text-muted">{copy}</p>
            {index < stages.length - 1 && (
              <FaArrowRight aria-hidden className="absolute -right-2 top-6 hidden text-muted sm:block" />
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-6 text-muted">
        Not: Bu süreç bir fiyat hesaplayıcısı değildir; nihai teklif, araç bilgileri ve gerektiğinde yapılan yerinde incelemenin ardından netleşir.
      </p>
    </section>
  );
}
