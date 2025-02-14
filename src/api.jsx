import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL; // Load from .env

// Fetch data from Express API
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
