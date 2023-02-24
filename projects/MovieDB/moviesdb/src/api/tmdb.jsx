import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: "f96b20d81006ea5ddd8f1aaf0adbc828",
  },
});
