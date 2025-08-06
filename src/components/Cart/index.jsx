import { useContext } from 'react';
import { CartContext } from '../Cartcontext';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  
  const onCheckout = () => navigate('/payment');
  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 text-gray-800 pt-24 pb-16">
      <Header />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-green-900 drop-shadow">
          Your Shopping Cart 🛒
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No items in cart</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01] hover:shadow-2xl flex gap-4 items-center"
              >
                
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg shadow"
                />

               
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-green-800">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.weight}</p>
                  <p className="text-sm text-gray-700 font-medium mt-1">Qty: {item.quantity}</p>
                  <div className="flex items-center space-x-2 mt-3">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full transition"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                  </div>
                </div>

               
                <p className="text-lg text-green-700 font-bold">
                  ₹{parseInt(item.price.replace(/[^\d]/g, '')) * item.quantity}
                </p>
              </div>
            ))}

           
            <div className="text-right text-2xl font-bold text-green-900 mt-10 drop-shadow">
              Total: ₹{getTotal().toLocaleString('en-IN')}
            </div>

            
            <div className="flex justify-end mt-6">
              <button className="bg-green-700 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-800 transition shadow-lg" onClick={onCheckout}>
                Proceed to Checkout →
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
