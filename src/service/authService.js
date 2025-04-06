import axios from "axios";
import { apiClient } from "../config/apnConfig";

export async function register(userData) {
  try {
    const response = await apiClient.post("/api/users", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Register error:", error.response?.data || error.message);
    throw error;
  }
}

export const login = async (formData) => {
  try {
    const response = await axios.post("https://nt-devconnector.onrender.com/api/auth", formData);
    console.log("Server javobi:", response.data); 
    return response.data;
  } catch (error) {
    console.error("Login xatosi:", error.response?.data || error.message);
    throw error.response?.data || { message: "Server xatosi" };
  }
};

