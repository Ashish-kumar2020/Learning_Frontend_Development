import { useEffect, useState } from "react";

const useGithubData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return data;
};

export default useGithubData;
