const router = require("express").Router();
const { Wishlist } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newWishList = await Wishlist.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWishList);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  // console.log("trying to delete in routes");
  // console.log("userID?", req.session.user_id);
  try {
    const wishListData = await Wishlist.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!wishListData) {
      res.status(404).json({ message: "No game found with this id!" });
      return;
    }

    res.status(200).json(wishListData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
});

module.exports = router;
