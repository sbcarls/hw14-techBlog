const User = require('./user.js');
const BlogPost = require('./blogPost');
const Comment = require('./comment');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

Blog.hasMany(Comment, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Blog, Comment };