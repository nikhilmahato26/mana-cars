import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';

const images = [
  'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?auto=format&fit=crop&w=400&q=80',
];

export const Gallery = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-mana-dark mb-4">
              Join Our <span className="text-mana-yellow">Community</span>
            </h2>
            <p className="text-lg text-gray-600">Follow us on Instagram for daily updates and offers.</p>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/manacars__hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <Instagram size={24} /> Follow @manacars__hyderabad
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/manacars__hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
            >
              <img
                src={src}
                alt="Instagram Gallery"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2 font-bold">
                  <Heart size={24} className="fill-white" /> 1.2k
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <MessageCircle size={24} className="fill-white" /> 84
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
