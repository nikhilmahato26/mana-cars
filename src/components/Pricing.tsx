import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, MessageCircle, Phone } from 'lucide-react';

const cityRides = [
  { type: 'Maruti Suzuki XL6', price: '₹20/km' },
];

const outstation = [
  { type: 'Maruti Suzuki XL6', price: '₹3200/day' },
];

export const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'city' | 'outstation'>('city');

  const handleBook = (carType: string, price: string, type: string) => {
    const text = `Hello MANA CARS, I want to book a ${carType} vehicle for ${type} at ${price}.`;
    window.open(`https://wa.me/917032343568?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ECECEC_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-mana-dark mb-4">
              Transparent <span className="text-mana-yellow">Pricing</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No hidden charges. No surprises. Just honest, affordable pricing for your journeys.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full inline-flex border border-gray-200 premium-shadow">
            <button
              onClick={() => setActiveTab('city')}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                activeTab === 'city'
                  ? 'bg-mana-dark text-white shadow-md'
                  : 'text-gray-500 hover:text-mana-dark hover:bg-gray-50'
              }`}
            >
              City Ride (₹ / KM)
            </button>
            <button
              onClick={() => setActiveTab('outstation')}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                activeTab === 'outstation'
                  ? 'bg-mana-dark text-white shadow-md'
                  : 'text-gray-500 hover:text-mana-dark hover:bg-gray-50'
              }`}
            >
              Outstation (₹ / Day)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {(activeTab === 'city' ? cityRides : outstation).map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={idx}
                  className="bg-white rounded-3xl p-6 border flex flex-col relative border-mana-yellow/50 premium-hover premium-shadow ring-2 ring-mana-yellow/20"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-lg">
                    Available
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-mana-dark">{item.type}</h4>
                  <div className="text-3xl font-extrabold mb-6 text-mana-yellow">
                    {item.price}
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                      <div className="p-1 rounded-full bg-green-100">
                        <Check size={14} className="text-green-600"/>
                      </div>
                      Well Maintained
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                      <div className="p-1 rounded-full bg-green-100">
                        <Check size={14} className="text-green-600"/>
                      </div>
                      Clean & Sanitized
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                      <div className="p-1 rounded-full bg-green-100">
                        <Check size={14} className="text-green-600"/>
                      </div>
                      24/7 Support
                    </li>
                  </ul>

                  <div className="space-y-3 mt-auto">
                    <button
                      onClick={() => handleBook(item.type, item.price, activeTab)}
                      className="w-full bg-mana-yellow text-mana-dark py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors"
                    >
                      Book Now
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleBook(item.type, item.price, activeTab)}
                        className="flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-xl text-sm font-bold text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        <MessageCircle size={16} /> WA
                      </button>
                      <a
                        href="tel:+917032343568"
                        className="flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-xl text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <Phone size={16} /> Call
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

