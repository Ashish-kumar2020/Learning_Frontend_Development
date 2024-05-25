import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <div className="text-2xl font-bold hover: cursor-pointer">
            ShopifySquare
          </div>
        </Link>

        <nav>
          <ul className="flex space-x-20">
            <Link to="/">
              <li className="hover:underline">Home</li>
            </Link>
            <li>{isAuthenticated && <h2>{user.name}</h2>}</li>
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button
                className="hover:underline"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}

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
