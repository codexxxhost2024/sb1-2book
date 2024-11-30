import { motion } from 'framer-motion';
import { Fan, Wind } from 'lucide-react';
import type { Room } from '../types';

interface RoomCardProps {
  room: Room;
  onClick: () => void;
}

export function RoomCard({ room, onClick }: RoomCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={`https://source.unsplash.com/800x600/?hotel,room&${room.id}`}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
          ₱{room.price}/night
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{room.name}</h3>
          {room.type === 'fan' ? (
            <Fan className="w-5 h-5 text-gray-600" />
          ) : (
            <Wind className="w-5 h-5 text-blue-500" />
          )}
        </div>
        <p className="text-gray-600 text-sm mb-3">{room.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Capacity: {room.capacity} guests</span>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              room.available
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {room.available ? 'Available' : 'Booked'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}