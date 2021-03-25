import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID o-c6Bl7Ka3ooKK3hAGlIYlAn3nE0Sw5c8c_dKHhqoF0",
  },
});
