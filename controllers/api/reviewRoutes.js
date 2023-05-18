const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Favorite } = require("../../models");

router.post("/", withAuth, async (req, res) => {
  try {
    const newReview = await Favorite.create({
      game_title: req.body.game_title,
      rating: req.body.rating,
      review: req.body.review,
      user_id: req.session.user_id,
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
