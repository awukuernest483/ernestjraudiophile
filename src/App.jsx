import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from "./components/header";
import { CartProvider } from "./context/CartContext";
import Home from './components/page';

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <Router>
      
        <main className="min-h-screen bg-black-50">
       
        <Home />
          
        </main>
      </Router>
    </CartProvider>
  )
}

export default App
