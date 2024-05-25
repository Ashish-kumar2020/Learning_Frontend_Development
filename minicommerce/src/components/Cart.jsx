import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Cart</h2>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <ProductCard product={product} isCartPage={true} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600">No items in cart</p>
      )}
    </div>
  );
}

export default Cart;
