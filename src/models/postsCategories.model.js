// module.exports = (sequelize, _DataTypes) => {
//   const postCategory = sequelize.define(
//     'postCategory',
//     {},
//     {
//       timestamps: false,
//       underscored: true,
//       tableName: 'post_Categories',
//     },
//   );

//   postCategory.associate = (models) => {
//     models.BlogPosts.belongsToMany(models.Category, {
//       as: 'categories',
//       through: postCategory,
//       foreignKey: 'postId',
//       otherKey: 'categoryId',
//     });
//     models.Category.belongsToMany(models.BlogPosts, {
//       as: 'blogPosts',
//       through: postCategory,
//       foreignKey: 'categoryId',
//       otherKey: 'postId',
//     })
//   }

//   return postCategory;
// };