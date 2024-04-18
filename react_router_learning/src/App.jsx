// import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./component/ThemeSwitcher/ThemeBtn";
// import Login from "./component/contextComponent/Login";
// import Profile from "./component/contextComponent/Profile";
// import UserContextProvider from "./context/UserContextProvider";
// import Footer from "./component/Footer";
// import Header from "./component/Header";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    // <UserContextProvider>
    //   {/* <Header />
    //   <Outlet />
    //   <Footer /> */}
    //   <Login />
    //   <Profile />
    // </UserContextProvider>
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <ThemeBtn />
    </ThemeProvider>
  );
}

export default App;
