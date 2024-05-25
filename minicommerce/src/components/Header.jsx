import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <div className="text-2xl font-bold hover: cursor-pointer">
            ShopifySquare
          </div>
        </Link>
        <div className="flex-grow mx-40">
          <input
            type="text"
            placeholder="Search..."
            className="w-[400px] p-2 rounded-md text-gray-800"
          />
        </div>
        <nav>
          <ul className="flex space-x-20">
            <Link to="/">
              <li className="hover:underline">Home</li>
            </Link>
            <Link to="/login">
              <li className="hover:underline">Login</li>
            </Link>
            <Link to="/about">
              <li className="hover:underline">About</li>
            </Link>
            <Link to="/cart">
              <li className="hover:underline">Cart</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
