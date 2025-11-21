
// ===== src/components/sections/ServiceCoverageMap.tsx =====
import { serviceLocations } from '@/data/locations';

export function ServiceCoverageMap() {
  const activeLocations = serviceLocations.filter(loc => loc.isActive);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lacivert-700 mb-4">
            Hizmet Bölgelerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İstanbul'un her yerinde hizmetinizdeyiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeLocations.map((location) => (
            <div key={location.id} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-lacivert-700 mb-4">
                📍 {location.city}
              </h3>
              <div className="flex flex-wrap gap-2">
                {location.districts.map((district) => (
                  <span
                    key={district}
                    className="inline-block px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                  >
                    {district}
                  </span>
                ))}
              </div>
              {location.phone && (
                <div className="mt-4 text-turuncu-500 font-semibold">
                  📞 {location.phone}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Placeholder for interactive map */}
        <div className="mt-12 rounded-xl overflow-hidden border-4 border-gray-200 bg-gray-100 h-96 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg className="h-16 w-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-lg">İnteraktif Harita Bölgesi</p>
            <p className="text-sm mt-2">Google Maps veya Leaflet entegrasyonu buraya eklenecek</p>
          </div>
        </div>
      </div>
    </section>
  );
}