import { create } from 'zustand';
import type { Room, Booking } from '../types';

interface Store {
  rooms: Room[];
  bookings: Booking[];
  addRoom: (room: Room) => void;
  updateRoom: (room: Room) => void;
  addBooking: (booking: Booking) => void;
  updateBooking: (booking: Booking) => void;
}

export const useStore = create<Store>((set) => ({
  rooms: [
    {
      id: '1',
      name: 'Standard Fan Room',
      type: 'fan',
      price: 250,
      description: 'Comfortable room with fan',
      capacity: 2,
      available: true,
    },
    {
      id: '2',
      name: 'Deluxe Aircon Room',
      type: 'aircon',
      price: 350,
      description: 'Modern room with air conditioning',
      capacity: 2,
      available: true,
    },
  ],
  bookings: [],
  addRoom: (room) => set((state) => ({ rooms: [...state.rooms, room] })),
  updateRoom: (room) =>
    set((state) => ({
      rooms: state.rooms.map((r) => (r.id === room.id ? room : r)),
    })),
  addBooking: (booking) =>
    set((state) => ({ bookings: [...state.bookings, booking] })),
  updateBooking: (booking) =>
    set((state) => ({
      bookings: state.bookings.map((b) => (b.id === booking.id ? booking : b)),
    })),
}));