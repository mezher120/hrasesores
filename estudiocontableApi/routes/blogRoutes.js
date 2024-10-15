const express = require('express');
const { getAllBlogs, postBlog } = require('../controllers/blogControllers.js');

const routes = express.Router();

routes.get('/', getAllBlogs);
routes.post('/', postBlog);

module.exports = routes;