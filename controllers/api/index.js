const router = require('express').Router();
const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const wishlistRoutes = require('./wishlistRoutes');
const rawgApi = require('./rawgApi')
const review = require('./reviewRoutes')

router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/rawgApi', rawgApi)
router.use('/reviewRoutes', review)

module.exports = router;
