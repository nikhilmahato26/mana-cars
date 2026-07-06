import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Car, Navigation } from 'lucide-react';

type FormData = {
  pickupLocation: string;
  dropLocation: string;
  vehicle: string;
  date: string;
  time: string;
  tripType: string;
};

export const BookingForm = () => {
  const { register, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      tripType: 'City Ride',
    },
  });

  const tripType = watch('tripType');

  const onSubmit = (data: FormData) => {
    const message = `Hello MANA CARS,\n\nI would like to book a vehicle.\n\n*Pickup:* ${data.pickupLocation}\n*Drop:* ${data.dropLocation || 'N/A'}\n*Vehicle:* ${data.vehicle}\n*Date:* ${data.date}\n*Time:* ${data.time}\n*Trip Type:* ${data.tripType}\n\nPlease share availability.`;
    
    const whatsappUrl = `https://wa.me/917032343568?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-2xl premium-shadow p-6 md:p-8 max-w-4xl mx-auto w-full relative z-10 -mt-10 md:-mt-20 border border-mana-border"
    >
      <div className="flex gap-4 mb-6 border-b border-mana-border pb-4">
        {['City Ride', 'Outstation', 'Airport Transfer'].map((type) => (
          <label
            key={type}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              tripType === type
                ? 'bg-mana-yellow text-mana-dark'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <input
              type="radio"
              value={type}
              {...register('tripType')}
              className="hidden"
            />
            {type}
          </label>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="relative">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Pickup Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Enter pickup area"
              {...register('pickupLocation', { required: true })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-mana-yellow focus:ring-2 focus:ring-mana-yellow/20 outline-none transition-all"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Drop Location</label>
          <div className="relative">
            <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Enter drop area"
              {...register('dropLocation')}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-mana-yellow focus:ring-2 focus:ring-mana-yellow/20 outline-none transition-all"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Choose Vehicle</label>
          <div className="relative">
            <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <select
              {...register('vehicle', { required: true })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-mana-yellow focus:ring-2 focus:ring-mana-yellow/20 outline-none transition-all appearance-none bg-white"
            >
              <option value="">Select a car</option>
              <option value="Swift">Swift</option>
              <option value="Hyundai i10">Hyundai i10</option>
              <option value="Hyundai i20">Hyundai i20</option>
              <option value="Dzire">Dzire</option>
              <option value="XL6">XL6</option>
              <option value="Ertiga">Ertiga</option>
              <option value="Innova Crysta">Innova Crysta</option>
              <option value="XUV700">XUV700</option>
              <option value="Thar">Thar</option>
            </select>
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Pickup Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="date"
              {...register('date', { required: true })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-mana-yellow focus:ring-2 focus:ring-mana-yellow/20 outline-none transition-all"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Pickup Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="time"
              {...register('time', { required: true })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-mana-yellow focus:ring-2 focus:ring-mana-yellow/20 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-mana-yellow text-mana-dark font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Check Availability
          </button>
        </div>
      </form>
    </motion.div>
  );
};
