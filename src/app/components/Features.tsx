import { CheckCircle2, Clock, Heart, Award } from 'lucide-react';

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] text-white px-6 py-2 rounded-full text-sm mb-4" style={{ fontWeight: 600 }}>
            ✨ WHY CHOOSE US
          </span>
          <h2 className="mb-4 text-gray-800" style={{ fontSize: '3rem', fontWeight: 700 }}>What Makes Us Special</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] rounded-full mb-6 shadow-xl">
              <CheckCircle2 className="text-white" size={40} />
            </div>
            <h3 className="mb-3 text-gray-800" style={{ fontWeight: 700, fontSize: '1.3rem' }}>100% Hygienic</h3>
            <p className="text-gray-600">
              Maintained with strict hygiene standards and regular sanitization
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#FFA500] rounded-full mb-6 shadow-xl">
              <Heart className="text-white" size={40} />
            </div>
            <h3 className="mb-3 text-gray-800" style={{ fontWeight: 700, fontSize: '1.3rem' }}>Made with Love</h3>
            <p className="text-gray-600">
              Every dish prepared with authentic recipes and premium ingredients
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00BCD4] to-[#4DD0E1] rounded-full mb-6 shadow-xl">
              <Clock className="text-white" size={40} />
            </div>
            <h3 className="mb-3 text-gray-800" style={{ fontWeight: 700, fontSize: '1.3rem' }}>Quick Service</h3>
            <p className="text-gray-600">
              Fast and efficient service without compromising on quality
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#9C27B0] to-[#BA68C8] rounded-full mb-6 shadow-xl">
              <Award className="text-white" size={40} />
            </div>
            <h3 className="mb-3 text-gray-800" style={{ fontWeight: 700, fontSize: '1.3rem' }}>Award Winning</h3>
            <p className="text-gray-600">
              Recognized for exceptional taste and customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
