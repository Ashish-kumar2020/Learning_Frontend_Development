import { useState, useEffect } from "react";
const useCarousalApi = () => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async ({ itemSelected, collectionId }) => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5719972&lng=77.36936779999999&collection=${collectionId}&tags=layout_CCS_${itemSelected}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
    );
    const json = await data.json();
    setApiData(json);
  };
  return apiData;
};

export default useCarousalApi;
