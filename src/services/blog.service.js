const { BlogPost, User, Category, PostCategory } = require('../models');

const schema = require('./validations/schema');

const createPostCategory = async ({ postId, categoryIds }) => {
  const tableIds = await Promise.all(categoryIds
    .map((categoryId) => PostCategory.create({ postId, categoryId })));
    
  return tableIds;
};

const createBlog = async ({ title, content, id, categoryIds }) => {
  const error = schema.validateBlog.validate({ title, content, id, categoryIds });
  if (error.type) return error;

  const newBlog = await BlogPost.create({ 
    title, content, userId: id, published: new Date(), updated: new Date() });
 
  const postsCategories = await createPostCategory({ postId: newBlog.id, categoryIds });

  await Promise.all(postsCategories);

  return newBlog;
};

const getPostUserCategory = async () => {
  const listPost = await BlogPost.findAll({
    include: [
    { model: User, 
      as: 'user', 
      attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return listPost;
};

const getPostUserCategoryById = async (id) => {
  const postById = await BlogPost.findOne({
    where: { id },
    include: [
    { model: User, 
      as: 'user', 
      attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return postById;
};

const updatePost = async ({ id, title, content }) => {
  const updatedPost = await BlogPost.update(
    { title, content }, 
    { where: { id },
    },
  );
  const update = await getPostUserCategoryById(updatedPost);
  
 return update;
};

const deletePost = async (id) => {
  const post = await BlogPost.destroy({ where: { id } });

  return post;
};

const searchPost = async (q) => {
  const getAllPost = await BlogPost.findAll({
    include: [
    { model: User, 
      as: 'user', 
      attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  const filterPost = getAllPost.filter((e) => e.title.includes(q) || e.content.includes(q));

  return filterPost;
};

module.exports = {
  createBlog,
  getPostUserCategory,
  getPostUserCategoryById,
  updatePost,
  deletePost,
  searchPost,
};