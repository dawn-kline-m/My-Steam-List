const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Favorite } = require('../../models');

router.post('/', withAuth, async (req, res) => {
  try {
  const key = process.env.API_KEY;

  const url = `https://rawg.io/api/games?search=${req.body.game_title}&page_size=10&page=1&key=${key}`;
  const options = {
    method: "GET",
  };

  
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

      const newReview = await Favorite.create({
        game_title: req.body.game_title,
        rating: req.body.rating,
        review: req.body.review,
        image: result.results[0].background_image,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newReview);
     
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router