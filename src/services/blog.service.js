const { BlogPost, User, Category, PostCategory } = require('../models');

const schema = require('./validations/schema');

const createPostCategory = async ({ postId, categoryIds }) => {
  const tableIds = await categoryIds
    .map((categoryId) => PostCategory.create({ postId, categoryId }));

  return tableIds;
};

const createBlog = async ({ title, content, id, categoryIds }) => {
  const error = schema.validateBlog.validate({ title, content, id, categoryIds });
  if (error.type) return error;

  const newBlog = await BlogPost.create({ 
    title, content, userId: id, published: new Date(), updated: new Date() });

  const postsCategories = await createPostCategory({ postId: newBlog.id, categoryIds });

  return postsCategories;
};

// const createPost = async ({ postId, categoryId }) => {
//   const newPost = await PostCategory.create({ postId, categoryId });

//   return newPost;
// };

const getPostUserCategory = async () => {
  const listPost = await BlogPost.findAll({
    include: [
    { model: User, 
      as: 'users', 
      attributes: ['displayName', 'email', 'image'] },
      { model: Category,
        as: 'categories',
        through: PostCategory },
    ],
  });

  return listPost;
};

module.exports = {
  createBlog,
  getPostUserCategory,
};