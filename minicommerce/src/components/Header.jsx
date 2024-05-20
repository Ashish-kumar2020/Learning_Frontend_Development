function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold hover: cursor-pointer">
          ShopifySquare
        </div>
        <div className="flex-grow mx-40">
          <input
            type="text"
            placeholder="Search..."
            className="w-[400px] p-2 rounded-md text-gray-800"
          />
        </div>
        <nav>
          <ul className="flex space-x-20">
            <li className="hover:underline">
              <a href="#home">Home</a>
            </li>
            <li className="hover:underline">
              <a href="#login">Login</a>
            </li>
            <li className="hover:underline">
              <a href="#about">About</a>
            </li>
            <li className="hover:underline">
              <a href="#cart">Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
