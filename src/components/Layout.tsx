import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8 mt-16">
        <Outlet />
      </main>
    </div>
  );
}