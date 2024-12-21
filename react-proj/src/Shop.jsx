import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Shop() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from the JSON file
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <button
        className="text-black bg-gray-600 px-6 py-3 rounded hover:bg-blue-400"
        onClick={() => navigate("/")}
      >
        Go Back to Homepage
      </button>
      <h2 className="text-4xl font-bold text-center mb-12">Shop Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-300 p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-6 text-center">{product.name}</h3>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: product.width,
                height: product.height,
                objectFit: "cover"
              }}
              className="mx-auto my-3"
            />
            <p className="text-gray-600 mb-4 text-2xl text-center">₱{product.price.toFixed(2)}</p>
            <button className="bg-gray-600 text-white px-4 py-2 w-full rounded hover:bg-blue-500">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
