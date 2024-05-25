import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice/cartSlice";

function ProductCard({ product, isCartPage }) {
  const { title, price, discountPercentage, thumbnail, rating, id } = product;

  const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

  const dispatch = useDispatch();

  const addCartItems = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        discountPercentage,
        thumbnail,
        rating,
        originalPrice,
      })
    );
  };

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img className="object-cover" src={thumbnail} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {discountPercentage}% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a>
          <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            <span className="text-sm text-slate-900 line-through">
              ${originalPrice}
            </span>
          </p>
          <div className="flex items-center">
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {rating}
            </span>
          </div>
        </div>
        <button
          onClick={isCartPage ? () => {} : addCartItems}
          className="w-[280px]"
        >
          <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {isCartPage ? "Proceed to Payment" : "Add to cart"}
          </div>
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPercentage: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  isCartPage: PropTypes.bool.isRequired,
};

export default ProductCard;
