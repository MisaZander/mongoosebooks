const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SavingSchema = new Schema({
  gid: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  author: [
    {
      type: String,
      required: true
    }
  ],
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Saving = mongoose.model("Saving", SavingSchema);
