
// ===== src/components/sections/ProcessSteps.tsx =====
import { processSteps } from '@/data/process';

export function ProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lacivert-700 mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aracınızı satmak için izlemeniz gereken basit 6 adım.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div key={step.id} className="relative">
              {/* Step Number */}
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-turuncu-500 text-white text-xl font-bold">
                  {step.step}
                </div>
                <div className="flex-1 h-1 bg-gray-200 hidden lg:block" />
              </div>

              <h3 className="text-xl font-bold text-lacivert-700 mb-2">
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}