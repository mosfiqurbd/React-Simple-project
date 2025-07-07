import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const filteredProducts = products
    .filter(p => 
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'low') return a.price - b.price;
      if (sortOrder === 'high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <input 
          type="text" 
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 mb-2 md:mb-0"
        />
        <select 
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2"
        >
          <option value="">Sort By</option>
          <option value="low">Low =&gt; High</option>
          <option value="high">High =&gt; Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
