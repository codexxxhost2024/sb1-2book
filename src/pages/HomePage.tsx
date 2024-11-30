import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, Star, Users } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Welcome to JUN n RIE
        </h1>
        <p className="text-xl text-gray-600">Your home away from home</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/book')}
        className="mt-12 bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
      >
        Book Now
      </motion.button>
    </div>
  );
}

const features = [
  {
    icon: Calendar,
    title: 'Easy Booking',
    description: 'Simple and fast booking process with instant confirmation',
  },
  {
    icon: Star,
    title: 'Quality Rooms',
    description: 'Clean and comfortable rooms with modern amenities',
  },
  {
    icon: Users,
    title: 'Great Service',
    description: '24/7 customer support for all your needs',
  },
];