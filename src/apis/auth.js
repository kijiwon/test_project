import axios from "axios";
import { useAuthStore } from "../store/auth";
import { setCookie } from "./cookie";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const signupAPI = async (formData) => {
  try {
    const res = await api.post("/signup", formData);
    return res;
  } catch (err) {
    return err.response.data.username[0];
  }
};

export const signinAPI = async (formData) => {
  try {
    const res = await api.post("/signin", formData);
    const { updateAccessToken, updateTokenExp, updateTokenTimeout } =
      useAuthStore.getState();

    const accessToken = await res.data.accessToken;
    const refreshToken = await res.data.refreshToken;
    // 만료시간
    const payload = JSON.parse(atob(accessToken.split(".")[1]));
    // console.log("payload>>>", payload);
    const tokenExp = new Date(payload.exp * 1000);
    const tokenTimeout =
      new Date(tokenExp).getTime() - new Date().getTime() - 5000; // 5초 전

    updateTokenTimeout(tokenTimeout);
    updateAccessToken(accessToken);
    updateTokenExp(tokenExp);
    setCookie("refreshToken", refreshToken, { path: "/" });
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};

export const refreshAPI = async (refreshToken) => {
  try {
    const res = await api.post("/refresh", refreshToken);
    return res;
  } catch (err) {
    return err;
  }
};
