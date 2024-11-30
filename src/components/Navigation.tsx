import { Link } from 'react-router-dom';
import { Home, Calendar, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg fixed w-full top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-xl">JUN n RIE</span>
          </Link>
          <div className="flex space-x-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/book"
                className="flex items-center space-x-1 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Now</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/admin"
                className="flex items-center space-x-1 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span>Admin</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}