import axios from "axios";

export const profile = async (token) => {
  try {
    const response = await axios.post("https://nt-devconnector.onrender.com/api/profile", formData);
    console.log("Server javobi:", response.data); 
    return response.data;
  } catch (error) {
    console.error("Login xatosi:", error.response?.data || error.message);
    throw error.response?.data || { message: "Server xatosi" };
  }
};