import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Shop from './Shop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-gray-600 text-white py-3 sticky top-0">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold">Creatine Power</h1>
            <nav>
              <a href="#features" className="px-4">Features</a>
              <a href="#products" className="px-4">Products</a>
              <a href="#contact" className="px-4">Contact</a>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>

        <footer className="bg-gray-600 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Creatine Power. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center bg-gray-100 py-20 text-center"
        style={{
          backgroundImage: "url('muscle.jpg')",
          backgroundSize: "1300px 640px"
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 ml-9 text-black flex items-start">Fuel Your Workouts</h2>
          <p className="text-black mb-10 ml-14 flex items-start ">
            High-quality creatine monohydrate <br />for enhanced strength and performance.
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-blue-500 flex items-center ml-32"
          >
            Shop Now
          </button>
        </div>
      </section>

      <section id="features" className="bg-gray-300 py-16 p-10">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-400 p-8 rounded shadow">
            <h3 className="text-2xl font-bold mb-4">High Purity</h3>
            <p className="text-gray-600">100% pure micronized creatine for better absorption.</p>
          </div>
          <div className="bg-gray-400 p-8 rounded shadow">
            <h3 className="text-2xl font-bold mb-4">Improved Performance</h3>
            <p className="text-gray-600">Boost energy, strength, and endurance during workouts.</p>
          </div>
          <div className="bg-gray-400 p-8 rounded shadow">
            <h3 className="text-2xl font-bold mb-4">No Fillers</h3>
            <p className="text-gray-600">Absolutely no additives, just pure creatine.</p>
          </div>
        </div>
      </section>
      
<section id="products" className="bg-gray-400 py-16">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-300 p-6 rounded shadow">
      <h3 className="text-2xl font-bold mb-6 ml-24">Creatine 100g</h3>
        <img
          src="100g.png"
          alt="Creatine 100g"
          className="w-60 ml-14 my-3"
        />
        <p className="text-gray-600 mb-4 ml-32 text-2xl">₱195.00</p>
        <button className="bg-gray-600 text-white px-4 py-2 ml-28 rounded hover:bg-blue-500">
          Add to Cart
        </button>
      </div>
      <div className="bg-gray-300 p-4 rounded shadow">
        <h3 className="text-2xl font-bold mb-6 ml-28">Creatine 1kg</h3>
        <img
          src="1kg.png"
          alt="Creatine 1kg"
          className="w-64 ml-14 my-1"
        />
        <p className="text-gray-600 mb-4 ml-36 text-2xl">₱639.00</p>
        <button className="bg-gray-600 text-white px-4 py-2 ml-32 rounded hover:bg-blue-500">
          Add to Cart
        </button>
      </div>
      <div className="bg-gray-300 p-4 rounded shadow">
        <h3 className="text-2xl font-bold mb-6 ml-20">Creatine Capsules</h3>
        <img
          src="capsule.png"
          alt="Creatine Capsules"
          className="w-64 ml-14 my-1"
        />
        <p className="text-gray-600 mb-4 ml-36 text-2xl">₱324.00</p>
        <button className="bg-gray-600 text-white px-4 py-2 ml-32 rounded hover:bg-blue-500">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default App;
