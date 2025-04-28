import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export default instance;







// This code creates an Axios instance with a base URL of "https://fakestoreapi.com".
// Axios is a promise-based HTTP client for the browser and Node.js. The instance can be used to make HTTP requests to the specified base URL, and it will automatically prepend the base URL to any relative URLs provided in the requests. This is useful for making API calls to a specific endpoint without having to repeat the base URL each time.
// The instance can be used to make GET, POST, PUT, DELETE, and other types of HTTP requests. For example:
