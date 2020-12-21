const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    idMeal: {type: String, trim: true, unique: false,},
    email: {type: String, trim: true, unique: false,},
    comment: {type: String, trim: true, unique: false,}

})

module.exports = mongoose.model('Comment', CommentSchema);
