// App.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slice/commerceSlice";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {state.products && state.products.length > 0 ? (
              <div className="flex flex-wrap justify-center">
                {state.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p>No products available</p>
            )}
          </div>
        )}
      </div>
      <Cart />
    </>
  );
}

export default App;
