import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do I book a car?',
    answer: 'Booking is simple! Just select your car, fill in the pickup details, and click "Book Now". This will open a pre-filled WhatsApp message. Send it to us, and we will confirm your booking instantly.',
  },
  {
    question: 'What are the required documents for renting?',
    answer: 'You need to provide your original Driving License and a valid Government ID (Aadhar Card, Passport, or Voter ID). For self-drive, a refundable security deposit is also required.',
  },
  {
    question: 'Is fuel included in the pricing?',
    answer: 'No, fuel is not included in the standard rental pricing. The car will be provided with a certain amount of fuel, and you are expected to return it with the same level, or pay for the difference.',
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'Absolutely not. MANA CARS believes in 100% transparent pricing. You only pay what you see on the final booking confirmation.',
  },
  {
    question: 'Can I cancel or modify my booking?',
    answer: 'Yes, you can easily cancel or modify your booking by contacting our support team via WhatsApp or call. Please refer to our cancellation policy for any applicable charges.',
  },
  {
    question: 'Do you provide airport transfer services?',
    answer: 'Yes, we provide 24/7 airport pickup and drop services across Hyderabad at fixed, transparent prices without any surge pricing.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-mana-dark mb-4">
              Got <span className="text-mana-yellow">Questions?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about booking with MANA CARS.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300 ${
                  openIndex === idx
                    ? 'bg-mana-yellow text-mana-dark premium-shadow'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'
                }`}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus size={24} className="shrink-0" />
                ) : (
                  <Plus size={24} className="shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-gray-600 leading-relaxed bg-white/50 rounded-b-2xl -mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
