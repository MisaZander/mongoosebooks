const express = require("express");
const axios = require("axios");
const router = express.Router();
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=" + process.env.APIKEY;

//@route GET api/books
//@desc Query GBooks for results
//@access Public
router.get("/:query", (req, res) => {
  const errors = {};
  const { query } = req.params;
  axios
    .get(BASEURL + query + APIKEY)
    .then(results => {
      const goodies = results.data.items.map(result => {
        const { id } = result;
        const { title, authors, description, previewLink } = result.volumeInfo;
        const { thumbnail } = result.volumeInfo.imageLinks;

        const data = {
          gid: id,
          title,
          authors,
          description,
          link: previewLink,
          img: thumbnail
        };
        return data;
      });
      return res.status(200).json(goodies);
    })
    .catch(err => {
      errors.err = err;
      return res.status(400).json(errors);
    });
});

module.exports = router;
