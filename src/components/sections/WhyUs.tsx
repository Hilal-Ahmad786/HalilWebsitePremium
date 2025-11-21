
// src/components/sections/WhyUs.tsx
interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

interface WhyUsProps {
  title: string;
  subtitle: string;
  items: WhyUsItem[];
}

export default function WhyUs({ title, subtitle, items }: WhyUsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl text-center hover:shadow-lg transition"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4 shadow-lg">
                <i className={`${item.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}