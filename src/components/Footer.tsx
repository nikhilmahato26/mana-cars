import { CarFront, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';

export const Footer = () => {
  return (
    <footer className="bg-mana-dark text-gray-300 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-mana-yellow p-2 rounded-xl text-mana-dark">
                <CarFront size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">MANA CARS</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium car rental service in Hyderabad. We offer affordable, clean, and reliable vehicles for all your travel needs.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/manacars__hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mana-yellow hover:text-mana-dark transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/917032343568"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Fleet', 'Pricing', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-mana-yellow transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-mana-yellow" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['City Rides', 'Airport Transfers', 'Outstation Trips', 'Temple Tours', 'Daily Rentals', 'Monthly Plans'].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-mana-yellow transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-mana-yellow" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-mana-yellow shrink-0 mt-1" size={18} />
                <span>
                  VNR Residency, Venkata Ramana Colony, Kukatpally, Hyderabad, Telangana 500085
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-mana-yellow shrink-0" size={18} />
                <a href="tel:+917032343568" className="hover:text-mana-yellow transition-colors">
                  7032343568
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-mana-yellow shrink-0" size={18} />
                <a href="mailto:manacars247@gmail.com" className="hover:text-mana-yellow transition-colors">
                  manacars247@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} MANA CARS. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
