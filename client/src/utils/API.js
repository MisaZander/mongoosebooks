import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  search: query => {
    const newQuery = query.replace(" ", "+");
    return axios.get(BASEURL + newQuery);
  },
  saveBook: data => {
    return axios.post("/api/savings", data);
  }
};
