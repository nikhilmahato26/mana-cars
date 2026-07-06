import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 bg-mana-yellow relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-mana-dark mb-6 leading-tight">
            Ready for Your <br className="hidden md:block" /> Next Ride?
          </h2>
          <p className="text-xl text-mana-dark/80 font-medium mb-10">
            Book your premium car in under 2 minutes. Experience the best rental service in Hyderabad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/917032343568?text=Hello%20MANA%20CARS,%20I%20would%20like%20to%20book%20a%20ride."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-mana-dark text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <MessageCircle size={20} /> Book via WhatsApp
            </a>
            <a
              href="tel:+917032343568"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-mana-dark px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all border border-transparent hover:border-mana-dark/10"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
