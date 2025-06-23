import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProduct(data.find((p) => String(p.id) === id)));
  }, [id]);

  if (!product) return <div className="p-8 text-center">Product not found.</div>;

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
      <img src={product.image} alt={product.name} className="w-full md:w-1/3 h-64 object-cover rounded" />
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-500 mb-2">{product.category}</p>
        <p className="mb-4">{product.description}</p>
        <div className="font-bold text-xl mb-4">${product.price}</div>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
