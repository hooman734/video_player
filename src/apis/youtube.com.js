import axios from "axios";

const KEY = "AIzaSyAlFpihOz3AYPzUl41s685LmV6OlhtzZgI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
