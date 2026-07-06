import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Corporate Executive',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    text: 'MANA CARS is the best rental service in Hyderabad. The Innova Crysta I booked for my family trip was spotless. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Reddy',
    role: 'Frequent Traveler',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    text: 'I use their airport drop service every week. The drivers are very professional and always on time. Five stars for the consistent experience.',
    rating: 5,
  },
  {
    name: 'Arun Kumar',
    role: 'Tourist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    text: 'Booked a Swift for a quick city tour. The booking process via WhatsApp was incredibly fast, and the car was in perfect condition.',
    rating: 5,
  },
  {
    name: 'Sneha Patel',
    role: 'Event Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    text: 'We rented multiple cars for a wedding event. MANA CARS provided excellent support and coordination. Will definitely book again.',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-mana-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mana-yellow/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mana-yellow/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Loved by <span className="text-mana-yellow">Customers</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here is what our happy customers have to say about our service.
            </p>
          </motion.div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="glass-dark p-8 rounded-3xl h-full flex flex-col relative">
                <Quote size={40} className="text-mana-yellow/20 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-mana-yellow fill-mana-yellow" />
                  ))}
                </div>

                <p className="text-gray-300 text-lg mb-8 flex-grow leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-mana-yellow"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
