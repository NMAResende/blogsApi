// module.exports = (sequelize, DataTypes) => {
//   const BlogPosts = sequelize.define('BlogPosts', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     title: DataTypes.STRING,
//     content: DataTypes.STRING,
//     userId: { type: DataTypes.INTEGER, foreignKey: true },
//     published: DataTypes.DATE,
//     updated: DataTypes.DATE,
//   },
//   {
//     timestamps: true, 
//     tableName: 'blog_Posts',
//     underscored: true,
//   });

//   BlogPosts.associate = (models) => {
//     BlogPosts.belongsTo(models.User, {
//       foreignKey: 'userId', as: 'users'
//     })
//   }

//   return BlogPosts;
// }