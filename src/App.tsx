import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { BookingPage } from './pages/BookingPage';
import { AdminPage } from './pages/AdminPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="book" element={<BookingPage />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;