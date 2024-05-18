import Header from "./components/Header";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Input />
      <TodoItem />
    </Provider>
  );
}

export default App;
