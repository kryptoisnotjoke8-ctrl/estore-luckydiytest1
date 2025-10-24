
import React from 'react';
import type { CartItem, Product } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (productId: number) => void;
  onAddItem: (product: Product) => void;
}

const CloseIcon: React.FC<{onClick: () => void}> = ({onClick}) => (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onAddItem }) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity" onClick={onClose}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl p-6 w-11/12 max-w-md z-50">
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
          <CloseIcon onClick={onClose} />
        </div>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
            {cartItems.map(item => (
              <div key={item.product.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={item.product.imageUrl} alt={item.product.name} className="w-16 h-16 object-cover rounded-md"/>
                  <div>
                    <p className="font-semibold text-gray-700">{item.product.name}</p>
                    <p className="text-sm text-gray-500">${item.product.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                    <button onClick={() => onRemoveItem(item.product.id)} className="px-2 py-0.5 rounded-md bg-gray-200 hover:bg-gray-300">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onAddItem(item.product)} className="px-2 py-0.5 rounded-md bg-gray-200 hover:bg-gray-300">+</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-orange-500 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-orange-600">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartModal;
