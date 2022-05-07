import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const comment = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) => {
  try {
    API.patch(`/posts/${id}`, updatedPost);
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const addItem = (id) => API.patch(`/posts/${id}/add`);

export const signIn = (FormData) => API.post("/user/signin", FormData);
export const signUp = (FormData) => API.post("/user/signup", FormData);

export const getUser = (id) => API.get(`/users/${id}`);
export const getUsers = () => API.get(`/users`);
export const getUsersBySearch = (searchQuery) =>
  API.get(`/users/search?searchQuery=${searchQuery.search || "none"}`);
export const createUser = (newUser) => API.post("/users", newUser);
export const updateUser = (id, updatedUser) => {
  try {
    API.patch(`/users/${id}`, updatedUser);
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = (id) => API.delete(`/users/delete/${id}`);
