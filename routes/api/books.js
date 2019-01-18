const express = require("express");
const axios = require("axios");
const router = express.Router();
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=" + process.env.APIKEY;
const isEmpty = require("../../client/src/utils/is-empty");

//@route GET api/books
//@desc Query GBooks for results
//@access Public
router.get("/:query", (req, res) => {
  const errors = {};
  const { query } = req.params;
  console.log(query);
  axios
    .get(BASEURL + query)
    .then(results => {
      const goodies = results.data.items.map(result => {
        // const { id } = result;
        // const { title, authors, description, previewLink } = result.volumeInfo;
        // const { thumbnail } = result.volumeInfo.imageLinks;
        // const id = isEmpty(result.id) ? "" : result.id;
        // const title = isEmpty(result.volumeInfo.title)
        //   ? "No Title"
        //   : result.volumeInfo.title;
        // const authors = isEmpty(result.volumeInfo.authors)
        //   ? "No Authors"
        //   : result.volumeInfo.authors;
        // const description = isEmpty(result.volumeInfo.description)
        //   ? "No description"
        //   : result.volumeInfo.description;
        // const previewLink = isEmpty(result.volumeInfo.previewLink)
        //   ? "No previewLink"
        //   : result.volumeInfo.previewLink;
        // const thumbnail = isEmpty(result.volumeInfo.imageLinks.thumbnail)
        //   ? "https://placehold.it/300x300"
        //   : result.volumeInfo.imageLinks.thumbnail;

        // const data = {
        //   gid: id,
        //   title,
        //   authors,
        //   description,
        //   link: previewLink,
        //   img: thumbnail
        // };
        // return data;
        return result;
      });
      return res.status(200).json(goodies);
    })
    .catch(err => {
      errors.err = err;
      console.log(err);
      return res.status(500).json(errors);
    });
});

module.exports = router;
