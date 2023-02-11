const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((response) => {
      console.log(response);

      res.render("movies.hbs", {
        allMovies: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/movies/:id", (req, res, next) => {


  MovieModel.findById(req.params.id)
    .then((response) => {
      res.render("details.hbs", {
        movieInfo: response,
      });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
