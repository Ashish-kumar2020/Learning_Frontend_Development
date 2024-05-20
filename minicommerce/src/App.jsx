import Header from "./components/Header";
// import SubHeader from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slice/commerceSlice";
function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div>
        <button
          onClick={() => {
            dispatch(fetchProducts());
          }}
        >
          Fetch Products
        </button>
      </div>
    </>
  );
}

export default App;
