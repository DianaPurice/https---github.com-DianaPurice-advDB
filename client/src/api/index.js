import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchProducts = () => axios.get(url);
