import React from 'react';
import { motion } from 'framer-motion';
import { Car, CalendarCheck, MessageCircle, CreditCard, MapPin } from 'lucide-react';

const steps = [
  { icon: Car, title: 'Choose Vehicle', desc: 'Select from our wide range of premium cars.' },
  { icon: CalendarCheck, title: 'Select Date & Time', desc: 'Pick your convenient travel schedule.' },
  { icon: MessageCircle, title: 'Confirm on WhatsApp', desc: 'Get instant confirmation from our team.' },
  { icon: CreditCard, title: 'Payment', desc: 'Secure and transparent payment process.' },
  { icon: MapPin, title: 'Enjoy Ride', desc: 'Have a safe and comfortable journey.' },
];

export const Timeline = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-mana-dark mb-4">
              How It <span className="text-mana-yellow">Works</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Booking your dream ride is simple, fast, and completely hassle-free.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-200">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-mana-yellow"
            />
          </div>

          {/* Connecting Line Mobile */}
          <div className="md:hidden absolute top-10 bottom-10 left-8 w-1 bg-gray-200">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full bg-mana-yellow"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 group relative"
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-4 border-gray-100 premium-shadow flex items-center justify-center shrink-0 group-hover:border-mana-yellow group-hover:scale-110 transition-all duration-300 relative z-20">
                    <Icon size={32} className="text-mana-dark group-hover:text-mana-yellow transition-colors" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-mana-dark text-white font-bold flex items-center justify-center text-sm border-2 border-white">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-mana-dark mb-2">{step.title}</h4>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
