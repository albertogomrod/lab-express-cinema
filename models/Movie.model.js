const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
},
{
    timestamp: true
});

const MovieModel= mongoose.model("Movie", movieSchema)
module.exports = MovieModel