import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const categoryColors: Record<string, string> = {
  'Veg': 'bg-[#4CAF50]',
  'Non-Veg': 'bg-[#FF6B35]',
  'Tiffin': 'bg-[#FFB84D]',
  'Juice': 'bg-[#00BCD4]',
  'Chat': 'bg-[#E91E63]',
  'Ice Cream': 'bg-[#9C27B0]'
};

export function MenuCard({ name, description, price, image, category }: MenuCardProps) {
  const categoryColor = categoryColors[category] || 'bg-[#4CAF50]';

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className={`${categoryColor} text-white px-4 py-1.5 rounded-full text-sm shadow-lg`} style={{ fontWeight: 600 }}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-gray-800 mb-2 group-hover:text-[#FF6B35] transition-colors" style={{ fontWeight: 600, fontSize: '1.15rem' }}>
          {name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-[#FF6B35]" style={{ fontWeight: 700, fontSize: '1.4rem' }}>{price}</p>
          <button className="bg-gradient-to-r from-[#FF6B35] to-[#FFA500] text-white px-6 py-2 rounded-full hover:from-[#FF8555] hover:to-[#FFB84D] transition-all transform hover:scale-105 text-sm shadow-md">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
