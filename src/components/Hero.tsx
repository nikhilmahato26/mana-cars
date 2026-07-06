import { motion } from 'framer-motion';
import { Phone, Car, MessageCircle, MapPin } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { BookingForm } from './BookingForm';


export const Hero = () => {
  return (
    <>
      <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gray-50">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-mana-yellow/10 -skew-x-12 translate-x-20 overflow-hidden" />
        <div className="absolute top-20 -left-20 w-72 h-72 bg-mana-yellow/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-mana-yellow/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold mb-6 premium-shadow">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Premium Car Rental in Hyderabad
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold text-mana-dark leading-tight mb-6">
                Drive Smarter. <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Travel Better.</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 lg:h-6 bg-mana-yellow -z-10 -rotate-2" />
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Affordable city rides, airport transfers, outstation trips, and premium rental cars across Hyderabad. Experience the journey you deserve.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a
                  href="https://wa.me/917032343568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-green-600 transition-all hover:-translate-y-1 premium-shadow"
                >
                  <MessageCircle size={20} />
                  Book on WhatsApp
                </a>
                <a
                  href="#fleet"
                  className="bg-mana-dark text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all hover:-translate-y-1 premium-shadow"
                >
                  View Fleet
                </a>
                <a
                  href="tel:+917032343568"
                  className="bg-white border border-gray-200 text-mana-dark p-3 rounded-xl hover:bg-gray-50 transition-all hover:-translate-y-1 premium-shadow"
                >
                  <Phone size={24} />
                </a>
                <a
                  href="https://www.instagram.com/manacars__hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200 text-mana-dark p-3 rounded-xl hover:bg-gray-50 transition-all hover:-translate-y-1 premium-shadow"
                >
                  <Instagram size={24} />
                </a>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 lg:gap-10">
                <div>
                  <h4 className="text-3xl font-extrabold text-mana-dark">
                    500+
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">Happy Customers</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <h4 className="text-3xl font-extrabold text-mana-dark">24/7</h4>
                  <p className="text-sm text-gray-500 font-medium">Support</p>
                </div>
                <div className="w-px h-12 bg-gray-300 hidden md:block" />
                <div className="hidden md:block">
                  <h4 className="text-3xl font-extrabold text-mana-dark">100%</h4>
                  <p className="text-sm text-gray-500 font-medium">Clean Cars</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content / Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden premium-shadow border-4 border-white aspect-[4/3] lg:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070"
                  alt="Premium Car"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-6 lg:-left-12 top-10 bg-white p-4 rounded-2xl premium-shadow z-20 flex items-center gap-3 border border-white/50"
              >
                <div className="bg-mana-yellow/20 p-2 rounded-full">
                  <MapPin className="text-mana-yellow" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Service</p>
                  <p className="text-sm font-bold text-mana-dark">Airport Drop</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -right-6 lg:-right-8 bottom-20 bg-white p-4 rounded-2xl premium-shadow z-20 flex items-center gap-3 border border-white/50"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <Car className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Popular</p>
                  <p className="text-sm font-bold text-mana-dark">Outstation</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form — sits in normal flow, pulls up with negative margin to overlap the hero */}
      <div className="relative z-20 -mt-12 px-4 md:px-6 pb-8">
        <BookingForm />
      </div>
    </>
  );
};
