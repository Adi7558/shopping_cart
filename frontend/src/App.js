import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/navigation';
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage';
import ProductDetail from './components/Pages/productDetail';
import CartPage from './components/Pages/CartPage';

function App() {
  return (
    <>
      <Navigation />

      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/details" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
