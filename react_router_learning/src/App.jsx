// import { Outlet } from "react-router-dom";
import "./App.css";
import Login from "./component/contextComponent/Login";
import Profile from "./component/contextComponent/Profile";
import UserContextProvider from "./context/UserContextProvider";
// import Footer from "./component/Footer";
// import Header from "./component/Header";

function App() {
  return (
    <UserContextProvider>
      {/* <Header />
      <Outlet />
      <Footer /> */}
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
