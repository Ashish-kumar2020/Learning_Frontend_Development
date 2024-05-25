import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          {cartItems.map((product) => (
            <div key={product.id} className="m-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
}

export default Cart;
