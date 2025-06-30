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

export const getBoardList = async (page) => {
  try {
    if (!page) page = 0;
    const res = await api.get("/boards", {
      params: { page: page, size: 10 },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const postBoard = async (formData) => {
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

export const deleteBoard = async (id) => {
  try {
    const res = await api.delete(`/boards/${id}`);
    return res;
  } catch (error) {
    return error;
  }
};

export const patchBoard = async ({ id, formData }) => {
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
    const res = await api.patch(`/boards/${id}`, data);
    return res;
  } catch (error) {
    return error;
  }
};
