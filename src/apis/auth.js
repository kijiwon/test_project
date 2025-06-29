import axios from "axios";
import { useAuthStore } from "../store/auth";
import { setCookie } from "./cookie";

const { updateAccessToken, updateTokenExp } = useAuthStore.getState();

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

    const accessToken = await res.data.accessToken;
    const refreshToken = await res.data.refreshToken;
    // 만료시간
    const payload = JSON.parse(atob(accessToken.split(".")[1]));
    // console.log("payload>>>", payload);
    const tokenExp = new Date(payload.exp * 1000);

    updateAccessToken(accessToken);
    updateTokenExp(tokenExp);
    setCookie("refreshToken", refreshToken, { path: "/" });
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};

export const refreshAPI = async (token) => {
  try {
    const res = await api.post("/refresh", token, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const accessToken = await res.data.accessToken;
    const refreshToken = await res.data.refreshToken;
    // 만료시간
    const payload = JSON.parse(atob(accessToken.split(".")[1]));
    // console.log("payload>>>", payload);
    const tokenExp = new Date(payload.exp * 1000);

    updateAccessToken(accessToken);
    updateTokenExp(tokenExp);
    setCookie("refreshToken", refreshToken, { path: "/" });
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};
