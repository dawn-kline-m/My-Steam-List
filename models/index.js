const User = require('./User');
const Favorite = require('./Favorite');
const Wishlist = require('./WishList')

User.hasMany(Favorite, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Wishlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Wishlist.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


module.exports = { User, Favorite, Wishlist };
