import React from 'react'
import ReactRouter from './router/ReactRouter.jsx'
import Navbar from './components/Navbar.jsx'
import Products from './components/Products'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div>
      <Navbar/>
      <ReactRouter/>
    </div>
  )
}