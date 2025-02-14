import React, { useEffect, useState } from "react";
import { fetchData } from "../api.jsx"; // Import API function

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        if (result) {
          setData(result);
        } else {
          setError("No data received from API.");
        }
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Software Solutions</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div style={{ backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px" }}>
          <h2>API Response:</h2>
          <pre style={{ textAlign: "left" }}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;
