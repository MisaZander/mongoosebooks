import axios from "axios";

//Proxy these requests to the backend to keep the API key hidden
export default {
  search: function(query) {
    return axios.get(`/api/books/${query}`);
  }
};
