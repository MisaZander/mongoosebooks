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

//@route DELETE api/savings/:id
//@desc Delete a book from the DB
//@access Public

module.exports = router;
