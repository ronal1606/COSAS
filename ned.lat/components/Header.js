import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#131921] text-white w-full py-2 px-4 flex items-center justify-between fixed top-0 z-50"
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        Amazon Clone
      </div>

      {/* Barra de búsqueda */}
      <div className="flex-grow mx-4 relative">
        <input 
          type="text" 
          placeholder="Buscar productos" 
          className="w-full p-2 rounded-md text-black pl-10"
        />
        <Search className="absolute left-3 top-3 text-gray-500" />
      </div>

      {/* Acciones de usuario */}
      <div className="flex items-center space-x-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center"
        >
          <User className="h-6 w-6" />
          <span className="text-xs">Iniciar sesión</span>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xs">Carrito</span>
        </motion.button>

        {/* Menú móvil */}
        <motion.button 
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          className="fixed top-16 right-0 w-64 bg-[#232F3E] h-full p-4 md:hidden"
        >
          <nav className="space-y-4">
            <a href="#" className="block text-white">Categorías</a>
            <a href="#" className="block text-white">Ofertas</a>
            <a href="#" className="block text-white">Historial</a>
            <a href="#" className="block text-white">Configuración</a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;