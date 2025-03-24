import React from 'react'
import { motion } from 'framer-motion'
import ProductList from '../components/ProductList'

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 p-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-amazon-blue mb-4">
            Bienvenido a Amazon Clone
          </h1>
          <p className="text-xl text-gray-600">
            Encuentra los mejores productos al mejor precio
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ProductList />
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Envío Gratis</h3>
              <p>En compras superiores a $99</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Ofertas Diarias</h3>
              <p>Descuentos increíbles cada día</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Garantía</h3>
              <p>30 días para devoluciones</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HomePage