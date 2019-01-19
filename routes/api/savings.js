const express = require("express");
const router = express.Router();

const Saving = require("../../models/Saving");

//@route GET api/savings
//@desc Get all the book savings
//@access Public
router.get("/", (req, res) => {
  const errors = {};
  Saving.find()
    .sort({ date: -1 })
    .exec((err, savings) => {
      if (err) {
        console.log(err);
        errors.err = err;
        return res.status(500).json(errors);
      }
      return res.status(200).json(savings);
    });
});

//@route POST api/savings
//@desc Save a new book to the DB
//@access Public
router.post("/", (req, res) => {
  const { gid, title, description, link, thumbnail } = req.body;
  const authors = req.body.authors.join(", ");

  //TODO: update model to make author a string. Change authors[] to string before saving
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
router.delete("/:gid", (req, res) => {
  Saving.deleteOne({ gid: req.params.gid }).exec(err => {
    if (err) {
      console.log(err);
      return res.status(404).json(err);
    }
    return res.status(200).json({ msg: "Book unshelved" });
  });
});

module.exports = router;
