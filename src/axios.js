import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-1ab09/us-central1/api",
});

export default instance;
