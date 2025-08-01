//import 'index.css';

const Header = () => {
  return (
    <header>
        <div className='navbar flex justify-between items-center p-4 bg-gray-800 text-white'>
        <div>
            
            <img src="https://res-console.cloudinary.com/dlwfzdhi4/thumbnails/v1/image/upload/v1754019249/NmZhZDIwODM4ODU1OTk3ZDE2NGRkODhkODg1ZmFkODdiZGZhM2JlNl9ubmNsOWE=/preview" alt="NxtMart Logo" className="w-[100px] h-auto mb-[10px]" />
        </div>
        <div>
            <ul className="flex gap-4">
                <li>Home</li>
                <li>Cart</li> 
                <li>Logout</li>

            </ul>
        </div>

        </div>
    </header>
  );

} 
export default Header;  