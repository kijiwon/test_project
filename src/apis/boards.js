import axios from "axios";
import { useAuthStore } from "../store/auth";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    // config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export const getBoardCategory = async () => {
  try {
    const res = await api.get("boards/categories");
    return res.data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getBoardList = async () => {
  try {
    const res = await api.get("/boards", {
      params: { page: 0, size: 10 },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const postBoardData = async (formData) => {
  try {
    const data = new FormData();
    data.append(
      "request",
      new Blob(
        [
          JSON.stringify({
            title: formData.title,
            content: formData.content,
            category: formData.category,
          }),
        ],
        { type: "application/json" }
      )
    );
    const res = await api.post("/boards", data);
    return res;
  } catch (error) {
    return error;
  }
};

export const getBoardById = async (id) => {
  try {
    const res = await api.get(`/boards/${id}`);
    return res;
  } catch (error) {
    return error;
  }
};
