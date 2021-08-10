import axios from "axios";

export default axios.create({
  baseURL:
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=35e18dcae8cd490dbd0526702c960fc1",
});
