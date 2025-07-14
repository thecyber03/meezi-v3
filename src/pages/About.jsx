import React from 'react';

function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
        <p className="text-gray-600">
          Welcome to Meezi — where fashion meets individuality. Founded with a passion for unique style and quality craftsmanship, we offer handpicked products that make you feel confident, creative, and empowered.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to provide high-quality fashion at affordable prices while celebrating individuality and sustainability. We believe every person deserves to express their true self through fashion.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Unique and trendy designs</li>
          <li>Premium quality materials</li>
          <li>Affordable pricing</li>
          <li>Fast and secure shipping</li>
          <li>Excellent customer support</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact U</h2>
        <p className="text-gray-600">
          Have questions or suggestions? Email us at <a href="mailto:support@meezi.shop" className="text-blue-500 underline">support@meezi.shop</a> — we're here to help!
        </p>
      </section>
    </div>
  );
}

export default About;
