const User = require('./User');
const Blog = require('./Blog');

////has Many to the foreign key reference anything to the right 
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//belongs to the foreign key reference anything to the left 
Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog };