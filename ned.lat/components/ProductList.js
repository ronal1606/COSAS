import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

const ProductList = () => {
  const productos = [
    {
      id: 1,
      nombre: 'Smartphone Galaxy',
      precio: 599.99,
      imagen: 'https://images.unsplash.com/photo-1601784551446-20a54cb86ada',
      calificacion: 4.5
    },
    {
      id: 2, 
      nombre: 'Laptop MacBook Pro',
      precio: 1299.99,
      imagen: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52d9',
      calificacion: 4.8
    },
    {
      id: 3,
      nombre: 'Audífonos Sony',
      precio: 199.99, 
      imagen: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb',
      calificacion: 4.3
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <motion.div 
            key={producto.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
          >
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{producto.nombre}</h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-semibold text-blue-600">
                  ${producto.precio}
                </span>
                <div className="flex items-center text-yellow-500">
                  <Star className="mr-1" size={20} />
                  {producto.calificacion}
                </div>
              </div>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
              >
                <ShoppingCart className="mr-2" />
                Añadir al Carrito
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductList;