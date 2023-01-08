let mongoose = require('mongoose')

let blogSchema = new mongoose.Schema({
    title:String,
    date:Date,
    desc:String,
    text:String
})

module.exports = mongoose.model('blog',blogSchema)