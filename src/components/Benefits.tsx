import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ThumbsUp, CalendarClock, MapPin, HeadphonesIcon, Award, Zap } from 'lucide-react';

const benefits = [
  { icon: Zap, title: 'Instant Confirmation', desc: 'Book your ride in seconds.' },
  { icon: ShieldCheck, title: 'Transparent Pricing', desc: 'No hidden charges or surprises.' },
  { icon: ThumbsUp, title: 'Well Maintained Cars', desc: 'Sanitized and serviced regularly.' },
  { icon: CalendarClock, title: 'Flexible Packages', desc: 'Hourly, daily, or monthly plans.' },
  { icon: MapPin, title: 'Pickup & Drop', desc: 'Doorstep service across the city.' },
  { icon: HeadphonesIcon, title: '24/7 Assistance', desc: 'Round-the-clock customer support.' },
  { icon: Award, title: 'Premium Support', desc: 'Dedicated managers for corporate clients.' },
  { icon: CheckCircle2, title: 'Easy Booking', desc: 'Hassle-free process via WhatsApp.' },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Required Documents Highlight Card */}
            <div className="absolute -top-10 -left-6 md:-left-10 bg-white p-6 rounded-2xl premium-shadow z-20 border-l-4 border-mana-yellow w-64 rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
              <h4 className="font-bold text-mana-dark mb-3 flex items-center gap-2">
                <ShieldCheck className="text-mana-yellow" size={20} /> Required Docs
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-mana-yellow" />
                  Original Driving License
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-mana-yellow" />
                  Valid Government ID
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-mana-yellow" />
                  Refundable Deposit
                </li>
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden premium-shadow relative z-10 aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=80"
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-bold text-white mb-2">Drive With Confidence</h3>
                <p className="text-gray-300">Your safety and comfort are our top priorities.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-mana-dark mb-4">
              Why Choose <span className="text-mana-yellow">MANA CARS</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We provide more than just a car. We deliver a seamless, premium, and reliable mobility experience for every journey you take.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-mana-yellow/20 p-3 rounded-xl shrink-0">
                      <Icon className="text-mana-yellow" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-mana-dark mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-500">{benefit.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
