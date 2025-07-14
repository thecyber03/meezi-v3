import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Search from '../pages/Search.jsx'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState('All');
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);

        const uniqueCats = Array.from(new Set(res.data.map(p => p.category)));
        setCategories(['All', ...uniqueCats]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = selected === 'All'
    ? products
    : products.filter(p => p.category === selected);

  return (
    <>
    
    <section className="py-16 px-6">

     <div className="p-10">< Search/></div>
      
   
      <h3 className="text-2xl font-[aquire] font-bold mb-4 text-center"><span>Featured Products</span></h3>

      <div className="flex justify-center font-[ClashDisplay] gap-4 mb-6 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1 border  rounded-full ${
              selected === cat ? "bg-[#BFD6DC]  text-black" : "text-black border-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">No products found.</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="bg-white  p-4 rounded-xl shadow">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg h-48 w-full object-contain"
              />
              <h4 className="mt-4 text-md font-semibold">{product.title}</h4>
              <p className="text-indigo-600 font-medium">₹{product.price}</p>
            </div>
          ))
        )}
       
      </div>
    </section>
     <div>
          <Testimonials/>
          <Footer/>
          
          </div>
    </>
  );
};

export default Products;
