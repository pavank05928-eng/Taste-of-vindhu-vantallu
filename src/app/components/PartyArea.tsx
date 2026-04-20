import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Sparkles, Music, Utensils } from 'lucide-react';

export function PartyArea() {
  return (
    <section id="party" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FFA500] text-white px-6 py-2 rounded-full text-sm mb-4" style={{ fontWeight: 600 }}>
            🎉 CELEBRATE WITH US
          </span>
          <h2 className="mb-4 text-gray-800" style={{ fontSize: '3rem', fontWeight: 700 }}>Premium Party Area</h2>
          <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.1rem' }}>
            Make your celebrations memorable in our spacious, elegant, and fully-equipped party hall
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1771574205963-0c1d84ac7354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBtb2Rlcm4lMjBlbGVnYW50fGVufDF8fHx8MTc3NjYwODgzMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Party Area"
              className="w-full h-[450px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#FFA500] p-4 rounded-xl shadow-lg">
                <Users className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-gray-800" style={{ fontWeight: 600, fontSize: '1.2rem' }}>Spacious Seating</h3>
                <p className="text-gray-600">Accommodate up to 100 guests with comfortable seating and flexible arrangements</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] p-4 rounded-xl shadow-lg">
                <Sparkles className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-gray-800" style={{ fontWeight: 600, fontSize: '1.2rem' }}>Premium Cleanliness</h3>
                <p className="text-gray-600">Maintained to the highest standards with regular sanitization and spotless interiors</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#FFB84D] to-[#FFCA28] p-4 rounded-xl shadow-lg">
                <Music className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-gray-800" style={{ fontWeight: 600, fontSize: '1.2rem' }}>Modern Audio & Decor</h3>
                <p className="text-gray-600">Professional sound system, ambient lighting, and elegant decorations included</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-[#E91E63] to-[#F06292] p-4 rounded-xl shadow-lg">
                <Utensils className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-gray-800" style={{ fontWeight: 600, fontSize: '1.2rem' }}>Customized Catering</h3>
                <p className="text-gray-600">Personalized menu packages with veg, non-veg, and special dietary options</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-[#FF6B35] via-[#FF8555] to-[#FFA500] rounded-2xl p-12 text-white text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="mb-4 text-white" style={{ fontSize: '2.5rem', fontWeight: 700 }}>Book Your Event Today!</h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ fontSize: '1.2rem' }}>
              Perfect for birthdays, anniversaries, family gatherings, corporate events, weddings, and celebrations of all kinds
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-[#FF6B35] px-10 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                📞 Call for Booking
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full hover:bg-white/30 transition-all border-2 border-white" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                💬 WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
