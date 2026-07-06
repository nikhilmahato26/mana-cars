import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Settings, Fuel, Users, Wind, Briefcase, Zap, Shield, Navigation } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNav, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fleet = [
  {
    name: 'Maruti Swift',
    type: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    price: '₹15/km',
    transmission: 'Manual',
    fuel: 'Petrol/CNG',
    seats: 5,
    ac: true,
    luggage: '2 Bags',
    mileage: '22 kmpl',
    features: ['Bluetooth', 'Music', 'USB Charging', 'AC'],
  },
  {
    name: 'Hyundai i20',
    type: 'Premium Hatchback',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
    price: '₹16/km',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    ac: true,
    luggage: '2 Bags',
    mileage: '20 kmpl',
    features: ['Bluetooth', 'Music', 'Fast Charging', 'Airbags'],
  },
  {
    name: 'Maruti Dzire',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?auto=format&fit=crop&w=800&q=80',
    price: '₹16/km',
    transmission: 'Manual/Auto',
    fuel: 'Petrol/CNG',
    seats: 5,
    ac: true,
    luggage: '3 Bags',
    mileage: '23 kmpl',
    features: ['Bluetooth', 'GPS', 'Fast Charging', 'Airbags'],
  },
  {
    name: 'Maruti Ertiga',
    type: 'MUV',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80',
    price: '₹18/km',
    transmission: 'Manual',
    fuel: 'Diesel/CNG',
    seats: 7,
    ac: true,
    luggage: '4 Bags',
    mileage: '18 kmpl',
    features: ['Rear AC', 'Music', 'Charging Ports', 'Airbags'],
  },
  {
    name: 'Toyota Innova Crysta',
    type: 'Premium SUV',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
    price: '₹22/km',
    transmission: 'Manual/Auto',
    fuel: 'Diesel',
    seats: 7,
    ac: true,
    luggage: '5 Bags',
    mileage: '14 kmpl',
    features: ['Captain Seats', 'Rear AC', 'Bluetooth', 'Airbags'],
  },
  {
    name: 'Mahindra Thar',
    type: 'Off-Road SUV',
    image: 'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?auto=format&fit=crop&w=800&q=80',
    price: '₹25/km',
    transmission: 'Manual/Auto',
    fuel: 'Diesel',
    seats: 4,
    ac: true,
    luggage: '2 Bags',
    mileage: '15 kmpl',
    features: ['4x4', 'Music', 'Airbags', 'GPS'],
  },
];

export const Fleet = () => {
  const handleBook = (carName: string) => {
    const text = `Hello MANA CARS, I want to inquire about booking the ${carName}.`;
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
                className="bg-white rounded-3xl premium-shadow overflow-hidden group premium-hover border border-mana-border"
              >
                {/* Image & Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-mana-dark uppercase tracking-wide">
                    {car.type}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-mana-yellow text-mana-dark px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
                    {car.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-mana-dark mb-4">{car.name}</h3>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <Settings size={16} className="text-mana-yellow" /> {car.transmission}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <Fuel size={16} className="text-mana-yellow" /> {car.fuel}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <Users size={16} className="text-mana-yellow" /> {car.seats} Seats
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <Briefcase size={16} className="text-mana-yellow" /> {car.luggage}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <Wind size={16} className="text-mana-yellow" /> {car.ac ? 'AC Available' : 'Non-AC'}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <Navigation size={16} className="text-mana-yellow" /> {car.mileage}
                    </div>
                  </div>

                  {/* Features Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-semibold">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleBook(car.name)}
                      className="col-span-2 bg-mana-yellow text-mana-dark py-3 rounded-xl font-bold hover:-translate-y-1 hover:shadow-lg transition-all"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={() => handleBook(car.name)}
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
