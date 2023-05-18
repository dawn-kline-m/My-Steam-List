const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Wishlist } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    try {
      const newWishlistAdd = await Wishlist.create({
        game_title: req.body.game_title,
        price: req.body.price,
        review: req.body.review,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newWishlistAdd);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router