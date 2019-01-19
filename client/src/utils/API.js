import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  getBooks: () => {
    return axios.get("/api/savings");
  },
  search: query => {
    const newQuery = query.replace(" ", "+");
    return axios.get(BASEURL + newQuery);
  },
  saveBook: data => {
    console.log(data); //Author data OK
    return axios.post("/api/savings", data);
  },
  deleteBook: id => {
    return axios.delete("/api/savings/" + id);
  }
};
