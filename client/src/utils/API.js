import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

//The proxy will intercept and mess with the results
//Make the server do the call instead
// export default {
//   search: query => {
//     const newQuery = query.replace(" ", "+");
//     return axios.get("/api/books/" + newQuery);
//   }
// };

export default {
  search: function(query) {
    const newQuery = query.replace(" ", "+");
    return axios.get(BASEURL + newQuery);
  }
};
