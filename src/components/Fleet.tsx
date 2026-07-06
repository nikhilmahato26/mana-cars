import { motion } from 'framer-motion';
import { MessageCircle, Phone, Settings, Fuel, Users, Wind, Briefcase, Navigation } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNav, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fleet = [
  {
    type: 'Maruti Suzuki XL6',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80',
    price: '₹20/km',
    transmission: 'Manual',
    fuel: 'Diesel/CNG',
    seats: 7,
    ac: true,
    luggage: '4 Bags',
    mileage: '18 kmpl',
    features: ['Rear AC', 'Music', 'Charging Ports', 'Airbags'],
  },
];

export const Fleet = () => {
  const handleBook = (carType: string) => {
    const text = `Hello MANA CARS, I want to inquire about booking a ${carType} vehicle.`;
    window.open(`https://wa.me/917032343568?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="fleet" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-mana-dark mb-4">
              Our Premium <span className="text-mana-yellow">Fleet</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of well-maintained vehicles. All cars come fully sanitized and feature-packed for your comfort.
            </p>
          </motion.div>
        </div>

        <Swiper
          modules={[SwiperNav, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="pb-16 px-2"
        >
          {fleet.map((car, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl premium-shadow overflow-hidden group border border-mana-border relative premium-hover"
              >
                {/* Image & Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.type}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-mana-dark uppercase tracking-wide">
                    {car.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                    Available
                  </div>
                  <div className="absolute bottom-4 right-4 bg-mana-yellow text-mana-dark px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
                    {car.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Settings size={16} className="text-mana-yellow" /> {car.transmission}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Fuel size={16} className="text-mana-yellow" /> {car.fuel}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Users size={16} className="text-mana-yellow" /> {car.seats} Seats
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Briefcase size={16} className="text-mana-yellow" /> {car.luggage}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Wind size={16} className="text-mana-yellow" /> {car.ac ? 'AC Available' : 'Non-AC'}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Navigation size={16} className="text-mana-yellow" /> {car.mileage}
                    </div>
                  </div>

                  {/* Features Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full font-semibold bg-gray-100 text-gray-600">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleBook(car.type)}
                      className="col-span-2 bg-mana-yellow text-mana-dark py-3 rounded-xl font-bold hover:-translate-y-1 hover:shadow-lg transition-all"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={() => handleBook(car.type)}
                      className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl font-bold text-gray-700 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-all"
                    >
                      <MessageCircle size={18} /> WhatsApp
                    </button>
                    <a
                      href="tel:+917032343568"
                      className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
                    >
                      <Phone size={18} /> Call
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
