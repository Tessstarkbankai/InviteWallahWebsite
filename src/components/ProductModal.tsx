import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hello, I'm interested in your ${product.title} invitation video service.`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="inline-block w-full max-w-3xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 py-8">
            <h3 className="text-3xl font-bold mb-4">{product.title}</h3>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-xl">Features:</h4>
              <ul className="list-disc list-inside space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle />
              Book Now on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;