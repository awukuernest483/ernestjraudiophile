import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Confirmation = () => {
  const location = useLocation();
  const { cart } = useCart();
  const orderNumber = location.state?.orderNumber;
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 50 : 0;
  const vat = subtotal * 0.2;
  const total = subtotal + shipping + vat;

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <div className="bg-white p-6 rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-2">Thank you for your order!</h1>
        <p className="mb-4">Your order number is <span className="font-mono">{orderNumber}</span></p>
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        <ul className="mb-4 text-left">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between border-b py-1">
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mb-1">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>VAT (20%)</span>
          <span>${vat.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Link to="/" className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Back to Home</Link>
      </div>
    </div>
  );
};

export default Confirmation;
