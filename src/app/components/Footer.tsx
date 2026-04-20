import { Logo } from './Logo';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo className="mb-6" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Serving authentic Indian cuisine since 2010 with a commitment to quality, cleanliness, and customer satisfaction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#FFA500] rounded-full flex items-center justify-center transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#FFA500] rounded-full flex items-center justify-center transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#FFA500] rounded-full flex items-center justify-center transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-white" style={{ fontWeight: 700, fontSize: '1.2rem' }}>Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#FFA500] p-2 rounded-lg">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-[#FF6B35] transition-colors">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#FFA500] p-2 rounded-lg">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <a href="mailto:info@vindhuvantallu.com" className="text-gray-300 hover:text-[#FF6B35] transition-colors">info@vindhuvantallu.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#FFA500] p-2 rounded-lg">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Visit Us</p>
                  <span className="text-gray-300 group-hover:text-[#FF6B35] transition-colors">123 Main Street, City Name<br/>State - 500001</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-white" style={{ fontWeight: 700, fontSize: '1.2rem' }}>Opening Hours</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] p-2 rounded-lg">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 mb-2" style={{ fontWeight: 600 }}>Every Day</p>
                  <div className="text-gray-400 space-y-1">
                    <p>Breakfast: 8:00 AM - 11:00 AM</p>
                    <p>Lunch: 12:00 PM - 3:00 PM</p>
                    <p>Dinner: 7:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-white" style={{ fontWeight: 700, fontSize: '1.2rem' }}>Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-[#FF6B35] transition-colors text-left hover:translate-x-2 transform duration-200"
              >
                → Home
              </button>
              <button
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-[#FF6B35] transition-colors text-left hover:translate-x-2 transform duration-200"
              >
                → Menu
              </button>
              <button
                onClick={() => document.getElementById('party')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-[#FF6B35] transition-colors text-left hover:translate-x-2 transform duration-200"
              >
                → Party Area
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-[#FF6B35] transition-colors text-left hover:translate-x-2 transform duration-200"
              >
                → Contact
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2026 Taste of Vindhu Vantallu. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#FF6B35] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
