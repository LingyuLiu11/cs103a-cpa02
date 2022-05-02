"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bookSchema = Schema({
  name: String,
  author: String,
  price: Number,
});

module.exports = mongoose.model("Book", bookSchema);
