module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    { 
          postId: { type: DataTypes.INTEGER, foreignKey: true },
          categoryId: { type: DataTypes.INTEGER, foreignKey: true },
        },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })
  }

  return PostCategory;
};