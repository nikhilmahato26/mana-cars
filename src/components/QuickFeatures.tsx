import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, UserCheck, Sparkles, Fuel, Headphones, Plane, Star, LayoutList } from 'lucide-react';

const features = [
  { icon: Clock, text: 'Instant Booking' },
  { icon: Tag, text: 'Affordable Prices' },
  { icon: UserCheck, text: 'Verified Drivers' },
  { icon: Sparkles, text: 'Clean Cars' },
  { icon: Fuel, text: 'Fuel Efficient' },
  { icon: Headphones, text: '24x7 Support' },
  { icon: Plane, text: 'Airport Pickup' },
  { icon: Star, text: 'Premium Fleet' },
  { icon: LayoutList, text: 'Flexible Packages' },
];

export const QuickFeatures = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200"
              >
                <Icon size={16} className="text-mana-yellow" />
                <span className="text-sm font-semibold text-gray-700">{feature.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
