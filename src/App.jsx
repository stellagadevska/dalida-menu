import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQQJefOJ26zu6sxj19vCzVe37xDojhjJrvQ6vEEz91mfhL_cHctgk9RH6mXtd_V7t2WxwX3iSG5B5gF/pub?output=csv';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch(SHEET_URL)
      .then(res => res.text())
      .then(text => {
        const rows = text.split('\n').filter(row => row.trim() !== '');
        const data = rows.slice(1).map(row => {
          const values = row.split(',').map(v => v.trim());
          return {
            Name: values[0],
            Description: values[1],
            Category: values[2],
            Price: values[3],
            Image: values[4]
          };
        });
        setProducts(data);
      });
  }, []);

  const categories = ['All', ...new Set(products.map(p => p.Category))];
  const filtered = selectedCategory === 'All'
    ? products
    : products.filter(p => p.Category === selectedCategory);

  return (
    <div className="p-6 font-sans max-w-6xl mx-auto">
      
      <Header title="Dalida Terrace Bar" />
      <CategoryFilter categories={categories} selected={selectedCategory} onChange={setSelectedCategory} />
      <ProductList products={filtered} />
    </div>
  );
}

export default App;
