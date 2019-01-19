const express = require("express");
const router = express.Router();

const Saving = require("../../models/Saving");

//@route GET api/savings
//@desc Get all the book savings
//@access Public
router.get("/", (req, res) => {
  res.status(418).json({ msg: "Okie dokie" });
});

//@route POST api/savings
//@desc Save a new book to the DB
//@access Public
router.post("/", (req, res) => {
  const { gid, title, authors, description, link, thumbnail } = req.body;

  const newSaving = new Saving({
    gid,
    title,
    authors,
    description,
    link,
    thumbnail
  });

  newSaving.save((err, saving) => {
    if (err) {
      console.log(err);
      return res.status(400).json(err);
    }
    return res.status(200).json(saving);
  });
});

//@route DELETE api/savings/:id
//@desc Delete a book from the DB
//@access Public

module.exports = router;
