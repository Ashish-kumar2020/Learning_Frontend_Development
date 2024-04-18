import useTheme from "../../context/theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = () => {
    if (themeMode === "light") {
      document.querySelector("html").style.backgroundColor = "black";
      darkTheme();
    } else {
      lightTheme();
      document.querySelector("html").style.backgroundColor = "white";
    }
  };

  return <button onClick={onChangeBtn}>Click Me</button>;
}
