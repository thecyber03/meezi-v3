import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx';
import Footer from '../components/Footer.jsx';
import Products from '../components/Products.jsx';
import Login from '../pages/Login.jsx'


export default function ReactRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}