import React, { useEffect, useState } from "react";
import { fetchData } from "../api.jsx"; // Import API function

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Software Solutions</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
