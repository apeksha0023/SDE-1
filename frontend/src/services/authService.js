import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, data);
    return response.data; // Assuming token and user data come here
  } catch (error) {
    console.error("Error during login: ", error.response ? error.response.data : error.message);
    throw error; // Re-throw error to handle it later in the component
  }
};




export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, data);
    return response.data; // Returning success or user data
  } catch (error) {
    console.error(error);
  }
};
