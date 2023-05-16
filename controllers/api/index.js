const router = require('express').Router();
const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const wishlistRoutes = require('./wishlistRoutes');

router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/wishlist', wishlistRoutes);

module.exports = router;
