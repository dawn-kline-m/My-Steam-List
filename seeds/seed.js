const sequelize = require('../config/connection');
const { User, Favorite, Wishlist } = require('../models');

const userData = require('./userData.json');
const favoriteData = require('./FavoriteData.json');
const wishlistData = require('./WishListData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const favorite of favoriteData) {
    await Favorite.create({
      ...favorite,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const wishlist of wishlistData) {
    await Wishlist.create({
      ...wishlist,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
