const router = require("express").Router();
const { Favorite, User, Wishlist } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all favorites and JOIN with user data
    const favoriteData = await Favorite.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const favorites = favoriteData.map((favorite) =>
      favorite.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    console.log(req.session);
    res.render("homepage", {
      favorites,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/favorite", withAuth, async (req, res) => {
  try {
    // Get all favorites and JOIN with user data
    const favoriteData = await Favorite.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
      where: {
        user_id: req.session.user_id,
      },
    });

    // Serialize data so the template can read it
    const favorites = favoriteData.map((favorite) =>
      favorite.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("favorite", {
      favorites,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/favorite/:id", withAuth, async (req, res) => {
  try {
    const favoriteData = await Favorite.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const favorite = favoriteData.get({ plain: true });

    res.render("favorite", {
      ...favorite,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/review", withAuth, async (req, res) => {
  try {
    // Get all favorites and JOIN with user data
    const favoriteData = await Favorite.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const favorites = favoriteData.map((favorite) =>
      favorite.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("review", {
      favorites,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/review/:id", withAuth, async (req, res) => {
  try {
    const favoriteData = await Favorite.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const favorite = favoriteData.get({ plain: true });

    res.render("review", {
      ...favorite,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/wishlist", async (req, res) => {
  // console.log("user_id", req.session.user_id);
  try {
    // Get all wishlist and JOIN with user data
    const wishlistData = await Wishlist.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
      where: {
        user_id: req.session.user_id,
      },
    });

    // Serialize data so the template can read it
    const wishlist = wishlistData.map((wishlist) =>
      wishlist.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("wishlist", {
      wishlist,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/wishlist/:id", withAuth, async (req, res) => {
  try {
    const wishlistData = await Wishlist.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const wishlist = wishlistData.get({ plain: true });

    res.render("wishlist", {
      ...wishlist,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/wishlistAdd", async (req, res) => {
  try {
    // Get all wishlist and JOIN with user data
    const wishlistData = await Wishlist.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const wishlist = wishlistData.map((wishlist) =>
      wishlist.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("wishlistadd", {
      wishlist,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/wishlist/:id", withAuth, async (req, res) => {
  try {
    const wishlistData = await Wishlist.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const wishlist = wishlistData.get({ plain: true });

    res.render("wishlist", {
      ...wishlist,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Favorite }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
