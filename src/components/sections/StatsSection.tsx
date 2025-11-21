import { statistics } from '@/data/stats';

export function StatsSection() {
  return (
    <section className="py-20 bg-lacivert-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-turuncu-500 mb-2">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}