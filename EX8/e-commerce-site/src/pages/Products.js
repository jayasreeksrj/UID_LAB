import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', description: 'Experience high-quality sound with noise cancellation and a comfortable fit.', price: '$120', imageUrl: 'https://via.placeholder.com/250' },
    { id: 2, name: 'Smartphone Stand', description: 'A sturdy and adjustable stand, perfect for watching videos and video calls.', price: '$20', imageUrl: 'https://via.placeholder.com/250' },
    { id: 3, name: 'Fitness Tracker', description: 'Track your daily steps, calories burned, and heart rate with this sleek tracker.', price: '$50', imageUrl: 'https://via.placeholder.com/250' },
    { id: 4, name: 'Portable Charger', description: 'A compact power bank with fast charging capabilities for your devices.', price: '$25', imageUrl: 'https://via.placeholder.com/250' },
    { id: 5, name: 'Bluetooth Speaker', description: 'Portable speaker with powerful bass and long-lasting battery life.', price: '$45', imageUrl: 'https://via.placeholder.com/250' },
    { id: 6, name: 'Reusable Water Bottle', description: 'Eco-friendly and BPA-free water bottle for daily hydration.', price: '$15', imageUrl: 'https://via.placeholder.com/250' }
  ];

  return (
    <div className="container">
      <h1>Our Products</h1>
      <p>Browse our best-sellers and trending products below:</p>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>{product.price}</strong></p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
