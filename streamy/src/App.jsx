// import Header from "./component/Header";
import user from "./data.json";
import { useEffect, useState } from "react";

function App() {
  console.log(user);
  const [data, setData] = useState("abcd");
  useEffect(() => {
    const dummy = user.JSON.stringfy();
    console.log(dummy);
  });
  return (
    <>
      <div>
        <input type="text" value={data} />
      </div>
    </>
  );
}

export default App;
