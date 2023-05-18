const router = require('express').Router();
const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const wishlistRoutes = require('./wishlistRoutes');
const rawgApi = require('./rawgApi')
const review = require('./reviewRoutes')
const wishlistAdd = require('./wishlistAddRoutes')

router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/rawgApi', rawgApi)
router.use('/reviewRoutes', review)
router.use('/wishlistAddRoutes', wishlistAdd)

module.exports = router;
