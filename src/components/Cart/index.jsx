import { useContext } from 'react';
import { CartContext } from '../Cartcontext';
import Header from '../Header';
import Footer from '../Footer';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">No items in cart</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.weight}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <p className="text-green-600 font-bold">
                  ₹{parseInt(item.price.replace(/[^\d]/g, '')) * item.quantity}
                </p>
              </div>
            ))}
            <div className="text-right text-lg font-semibold text-gray-800 mt-6">
              Total: ₹{getTotal()}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Cart;