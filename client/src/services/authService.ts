// src/services/authService.ts
import axios from "axios";

const API_URL = "http://localhost:3000/auth";

export type SignUpPayload = {
  email: string;
  name: string;
  password: string;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export const signup = async (payload: SignUpPayload) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, payload);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};

export const login = async (payload: SignInPayload) => {
  try {
    const response = await axios.post(`${API_URL}/login`, payload);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
