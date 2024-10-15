const Blog = require('../models/Blog.js')

const getAllBlogs = async (req, res) => {
    console.log('getAllBlogs')
}

const postBlog = async (req, res) => {
    const data = req.body;
    try {
        const newBlog = new Blog(data);
        await newBlog.save();
        res.status(200).json(newBlog);
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

module.exports = {
    getAllBlogs,
    postBlog
}