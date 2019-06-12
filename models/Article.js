const mongoose = require('mongoose')
const connection = require('../config')

// define database document here
// can use javascript datatypes (String, Boolean, Integer)
const Article = new mongoose.Schema({
    title: String,
    url: String,
    comment: String
})

// name the model (News and pass the scheme I created (Article)
module.exports = mongoose.model('News', Article)