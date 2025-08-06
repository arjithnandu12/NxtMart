import { useNavigate } from "react-router-dom"; 
import Cookies from 'js-cookie';   

const Header = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/login');
  };
  const onCart = () => navigate('/cart');
  const onHome = () => navigate('/');
  const onProduct = () => navigate('/products');
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <img
          src="https://res-console.cloudinary.com/dlwfzdhi4/thumbnails/v1/image/upload/v1754019249/NmZhZDIwODM4ODU1OTk3ZDE2NGRkODhkODg1ZmFkODdiZGZhM2JlNl9ubmNsOWE=/preview"
          alt="NxtMart Logo"
          className="w-[100px] h-auto cursor-pointer"
          onClick={onHome}
        />
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-green-600 transition" onClick={onHome}>Home</li>
          <li className="cursor-pointer hover:text-green-600 transition" onClick={onProduct}>Products</li>
          <li className="cursor-pointer hover:text-green-600 transition" onClick={onCart}>Cart</li>
          <li className="cursor-pointer hover:text-red-500 transition" onClick={onLogout}>Logout</li>
        </ul>
      </div>
    </header>
  );
};
export default Header;