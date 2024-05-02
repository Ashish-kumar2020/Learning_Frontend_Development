import BestPlace from "./components/BestPlace";
import Body from "./components/Body";
import CuisinesCarasoul from "./components/CuisinesCarasoul";
import Cusines from "./components/Cusines";
import Explore from "./components/Explore";
import Header from "./components/Header";
import RestaurantChain from "./components/RestaurantChain";

function App() {
  return (
    <>
      <Header />
      <CuisinesCarasoul />
      <RestaurantChain />
      <Body />
      <BestPlace />
      <Cusines />
      <Explore />
    </>
  );
}

export default App;
