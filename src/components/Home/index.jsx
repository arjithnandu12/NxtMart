import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-white to-green-100 flex flex-col">
      
      <div className="flex flex-col justify-center items-center flex-grow text-center px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-green-600">NxtMart</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
          Your one-stop shop for fresh groceries and daily essentials.
        </p>
        <Link to="/products">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition">
            Shop Now
          </button>
        </Link>
      </div>

      
      <footer className="bg-green-600 text-white text-center py-6">
        <p className="font-semibold text-lg">Ready to start shopping?</p>
        <Link to="/login">
          <button className="mt-4 bg-white text-green-600 font-bold px-5 py-2 rounded-full hover:bg-gray-100 transition">
            Start Shopping
          </button>
        </Link>
        <p className="mt-4 text-sm opacity-80">&copy; 2025 NxtMart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
