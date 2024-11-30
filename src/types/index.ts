export type PaymentMethod = 'gcash' | 'maya' | 'cash' | 'bank';

export interface Room {
  id: string;
  name: string;
  type: 'fan' | 'aircon';
  price: number;
  description: string;
  capacity: number;
  available: boolean;
}

export interface Booking {
  id: string;
  roomId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkIn: string;
  checkOut: string;
  numberOfGuests: number;
  paymentMethod: PaymentMethod;
  totalAmount: number;
  amountPaid: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  timestamp: number;
}