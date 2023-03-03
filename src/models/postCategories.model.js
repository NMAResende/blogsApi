// module.exports = (sequelize, _DataTypes) => {
//   const PostCategory = sequelize.define(
//     'PostCategory',
//     { 
        //   post_id: { type: DataTypes.INTEGER, foreignKey: true },
        //   category_id: { type: DataTypes.INTEGER, foreignKey: true },
        // },
//     {
//       timestamps: false,
//       underscored: true,
//       tableName: 'post_categories',
//     },
//   );

//   PostCategory.associate = (models) => {
//     models.BlogPost.belongsToMany(models.Category, {
//       as: 'categories',
//       through: postCategory,
//       foreignKey: 'postId',
//       otherKey: 'categoryId',
//     });
//     models.Category.belongsToMany(models.BlogPost, {
//       as: 'blogPosts',
//       through: postCategory,
//       foreignKey: 'categoryId',
//       otherKey: 'postId',
//     })
//   }

//   return PostCategory;
// };