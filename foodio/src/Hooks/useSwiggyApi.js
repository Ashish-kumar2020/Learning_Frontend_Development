import { useState, useEffect } from "react";
const useSwiggyApi = () => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5719972&lng=77.36936779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setApiData(json);
  };
  return apiData;
};

export default useSwiggyApi;
