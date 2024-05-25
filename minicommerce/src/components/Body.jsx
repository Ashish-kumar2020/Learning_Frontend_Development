import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import { fetchProducts } from "../redux/slice/commerceSlice";
const Body = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {state.products && state.products.length > 0 ? (
            <div className="flex flex-wrap justify-center">
              {state.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isCartPage={false}
                />
              ))}
            </div>
          ) : (
            <p>No products available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
