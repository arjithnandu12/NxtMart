import { useContext,useRef } from 'react';
import { CartContext } from '../Cartcontext';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';


const Payment = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const { cartItems,clearCart } = useContext(CartContext);

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return total + price * item.quantity;
    }, 0);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment Successful! 🎉');
    clearCart()
    formRef.current.reset();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 pt-24 pb-16">
      <Header />
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 transition-all">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">Payment</h1>

        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Order Summary</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2 border-b border-gray-200"
            >
              <p className="text-gray-800">
                {item.name} × {item.quantity}
              </p>
              <p className="text-green-700 font-medium">
                ₹{parseInt(item.price.replace(/[^\d]/g, '')) * item.quantity}
              </p>
            </div>
          ))}
          <div className="text-right text-xl font-bold mt-4 text-green-900">
            Total: ₹{getTotal().toLocaleString('en-IN')}
          </div>
        </div>

        
        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your full name"
            />
          </div>
        
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Payment Method</label>
            <select
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-lg transition"
          >
            Pay Now
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
