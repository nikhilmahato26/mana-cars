import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

const packages = [
  {
    name: 'Daily Plan',
    price: '₹299',
    period: '/ day',
    description: 'Perfect for quick city errands and short trips.',
    features: ['Instant Confirmation', 'City Limits Only', 'Basic Support', 'Standard Hatchback'],
    highlighted: false,
  },
  {
    name: 'Weekly Plan',
    price: '₹2999',
    period: '/ week',
    description: 'Ideal for weekly commutes and weekend getaways.',
    features: ['Priority Booking', 'Outstation Allowed', '24/7 Premium Support', 'Sedan / Hatchback', 'Free Cancellation'],
    highlighted: true,
  },
  {
    name: 'Monthly Plan',
    price: '₹29999',
    period: '/ month',
    description: 'Best for long-term usage and corporate needs.',
    features: ['Dedicated Vehicle', 'Unlimited Kilometers', 'Priority 24/7 Support', 'Any Standard Vehicle', 'Free Maintenance'],
    highlighted: false,
  },
];

export const Packages = () => {
  const handleBook = (pkgName: string) => {
    const text = `Hello MANA CARS, I'm interested in the ${pkgName}. Please share more details.`;
    window.open(`https://wa.me/917032343568?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-mana-dark mb-4">
              Advance <span className="text-mana-yellow">Booking</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lock in your ride with our flexible advance booking packages. Save more when you book longer.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {packages.map((pkg, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className={`relative bg-white rounded-3xl p-8 border ${
                pkg.highlighted
                  ? 'border-mana-yellow shadow-[0_20px_50px_rgba(255,208,0,0.15)] md:-translate-y-4'
                  : 'border-gray-200 premium-shadow premium-hover'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-mana-yellow text-mana-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1 shadow-md">
                  <Star size={14} fill="currentColor" /> Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-mana-dark mb-2">{pkg.name}</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">{pkg.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-mana-dark">{pkg.price}</span>
                <span className="text-gray-500 font-medium ml-1">{pkg.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-mana-yellow shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBook(pkg.name)}
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlighted
                    ? 'bg-mana-dark text-white hover:bg-black hover:shadow-xl'
                    : 'bg-mana-yellow text-mana-dark hover:shadow-lg'
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
