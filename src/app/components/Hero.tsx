import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB2ZWdldGFyaWFufGVufDF8fHx8MTc3NjY1NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Delicious Indian Food"
          className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        <div className="mb-6 animate-[fadeIn_1s_ease-in]">
          <span className="inline-block bg-[#FF6B35]/90 backdrop-blur-sm px-6 py-2 rounded-full text-sm mb-4">
            ⭐ Authentic Indian Restaurant Since 2010
          </span>
        </div>

        <h1 className="mb-6 text-white drop-shadow-2xl animate-[slideDown_1s_ease-out]" style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.2 }}>
          Taste of Vindhu Vantallu
        </h1>

        <p className="mb-4 max-w-3xl mx-auto text-gray-100 drop-shadow-lg" style={{ fontSize: '1.4rem', fontWeight: 300 }}>
          Experience the authentic flavors of India
        </p>

        <p className="mb-8 max-w-2xl mx-auto text-gray-200" style={{ fontSize: '1.1rem' }}>
          From aromatic biryanis to crispy dosas, fresh juices to delicious ice creams - we serve it all with love in a spotlessly clean environment
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Star className="text-yellow-400" size={20} fill="currentColor" />
            <span>4.8/5 Rating</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span>✓</span>
            <span>100% Hygienic</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span>🎉</span>
            <span>Party Hall Available</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#FF6B35] to-[#FFA500] hover:from-[#FF8555] hover:to-[#FFB84D] px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-2xl"
            style={{ fontWeight: 600, fontSize: '1.1rem' }}
          >
            Explore Our Menu
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-full transition-all border-2 border-white/50"
            style={{ fontWeight: 600, fontSize: '1.1rem' }}
          >
            Contact Us
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
