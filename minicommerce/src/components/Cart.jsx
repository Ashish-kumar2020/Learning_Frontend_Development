import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
}

export default Cart;
