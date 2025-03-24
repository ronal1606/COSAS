import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from './lib/utils';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import Categories from './components/Categories';
import ShoppingCart from './components/ShoppingCart';
import ProductDetailPage from './pages/ProductDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import PaymentSystem from './components/PaymentSystem';

function App() {
  return (
    <Router>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "min-h-screen bg-gray-50 text-gray-900",
          "flex flex-col w-full overflow-x-hidden"
        )}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/carrito" element={<ShoppingCart />} />
          <Route path="/producto/:id" element={<ProductDetailPage />} />
          <Route path="/busqueda" element={<SearchResultsPage />} />
          <Route path="/pago" element={<PaymentSystem />} />
        </Routes>
      </motion.div>
    </Router>
  );
}

export default App;