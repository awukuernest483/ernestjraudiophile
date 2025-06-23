import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const initialForm = {
  name: "",
  email: "",
  address: "",
  payment: "",
};

const Checkout = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const { cart } = useCart();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Valid email required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.payment) newErrors.payment = "Payment info required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Simulate order number
      const orderNumber = Date.now();
      navigate("/confirmation", { state: { orderNumber } });
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
      >
        <div>
          <label className="block font-medium">Name</label>
          <input
            className="w-full border p-2 rounded mt-1"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            className="w-full border p-2 rounded mt-1"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            className="w-full border p-2 rounded mt-1"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>
        <div>
          <label className="block font-medium">Payment Info</label>
          <input
            className="w-full border p-2 rounded mt-1"
            name="payment"
            value={form.payment}
            onChange={handleChange}
            required
            placeholder="Card number, etc."
          />
          {errors.payment && (
            <p className="text-red-500 text-sm">{errors.payment}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
