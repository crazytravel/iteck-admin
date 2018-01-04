const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema({
    "id": {type: String, index: {unique: true}},
    "title": {type: String, index: true},
    "content": {type: String},
    "image": {type: String},
    "created": {type: Date, default: Date.now, index: true},
    "updated": {type: Date, default: Date.now, index: true}
})

module.exports = mongoose.model('Article', Article)