const express = require('express');
const { getUser, postUser} = require('../controllers/userControllers.js')

const routes = express.Router();

routes.get('/', getUser);
routes.post('/', postUser);

module.exports = routes;