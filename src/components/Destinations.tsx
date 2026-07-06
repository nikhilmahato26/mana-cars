import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, ArrowRight } from 'lucide-react';

const temples = [
  { name: 'Yadagirigutta', image: 'https://images.unsplash.com/photo-1590400583789-22a7f5a728b7?auto=format&fit=crop&w=600&q=80' },
  { name: 'Basara', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80' },
  { name: 'Srisailam', image: 'https://images.unsplash.com/photo-1600080826978-5db0d4948a4c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Bhadrachalam', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80' },
];

const attractions = [
  { name: 'Charminar', image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80' },
  { name: 'Golconda Fort', image: 'https://images.unsplash.com/photo-1572978002621-e8d1ee1765c3?auto=format&fit=crop&w=600&q=80' },
  { name: 'Ramoji Film City', image: 'https://images.unsplash.com/photo-1596706939947-d1ff04eb41c5?auto=format&fit=crop&w=600&q=80' },
  { name: 'Hussain Sagar', image: 'https://images.unsplash.com/photo-1594902097334-a0fa2e3c0048?auto=format&fit=crop&w=600&q=80' },
  { name: 'Wonderla', image: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=600&q=80' },
  { name: 'Birla Mandir', image: 'https://images.unsplash.com/photo-1610444391696-65be799b61d3?auto=format&fit=crop&w=600&q=80' },
];

export const Destinations = () => {
  const handleBook = (destination: string) => {
    const text = `Hello MANA CARS, I want to book a trip to ${destination}.`;
    window.open(`https://wa.me/917032343568?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Airport Transfer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-mana-dark rounded-3xl overflow-hidden mb-24 premium-shadow relative"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80"
              alt="Airport Transfer"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
          </div>
          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-mana-yellow/20 px-4 py-2 rounded-full mb-6">
                <Plane className="text-mana-yellow" size={20} />
                <span className="text-mana-yellow font-bold text-sm tracking-wide uppercase">Airport Transfer</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Seamless <span className="text-mana-yellow">Airport</span> Rides
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Enjoy hassle-free airport pickups and drops with our 24x7 service. Fixed pricing, no surge, and always on time.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button
                  onClick={() => handleBook('Airport Transfer')}
                  className="bg-mana-yellow text-mana-dark px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2"
                >
                  Book Transfer <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Temple Tours Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-mana-dark mb-4">Divine <span className="text-mana-yellow">Temple Tours</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comfortable and peaceful rides to all major spiritual destinations around Hyderabad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {temples.map((temple, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer premium-shadow"
                onClick={() => handleBook(temple.name)}
              >
                <img src={temple.image} alt={temple.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-mana-dark/90 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-bold text-white mb-2">{temple.name}</h4>
                  <div className="flex items-center text-mana-yellow font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                    Book Ride <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hyderabad Attractions */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-mana-dark mb-4">Explore <span className="text-mana-yellow">Hyderabad</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the rich heritage and entertainment hubs of the Pearl City.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((place, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden premium-shadow premium-hover flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full">
                    <MapPin size={16} className="text-mana-dark" />
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <h4 className="text-lg font-bold text-mana-dark">{place.name}</h4>
                  <button
                    onClick={() => handleBook(place.name)}
                    className="text-mana-yellow bg-yellow-50 p-3 rounded-full hover:bg-mana-yellow hover:text-mana-dark transition-colors"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
