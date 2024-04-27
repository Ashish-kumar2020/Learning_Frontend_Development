import { useState } from "react";
import { addTodo } from "../slice/todoSlice";
import { useDispatch } from "react-redux";
const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const dispatch = useDispatch();
  const submitTodoHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="flex justify-center items-center mt-[80px]">
      <input
        className={`w-[450px] h-[50px] rounded-[.8rem] p-[22px] text-[20px] font-semibold bg-gray-700 text-white border ${
          isFocused ? "border-blue-500" : "border-gray-300"
        } outline-none px-4 py-2 rounded-md`}
        type="text"
        name="todo-task"
        id="todos"
        placeholder="Enter a Todo..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button
        className="h-[50px] w-[110px] rounded-[0.8rem] text-white ml-[20px] bg-customPurple"
        onClick={submitTodoHandler}
      >
        Add todo
      </button>
    </div>
  );
};

export default Input;
