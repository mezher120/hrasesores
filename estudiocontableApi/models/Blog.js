const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        default: 'https://miro.medium.com/v2/resize:fit:960/0*h2kC2XZpz3HR2-tI.jpg'
    },
    content: {
        type: String,
        required: true
    }, 
});

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;