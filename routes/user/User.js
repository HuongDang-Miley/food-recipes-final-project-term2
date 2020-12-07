const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        require: true,
    },
    favMeals: [{
        type: mongoose.Schema.ObjectId, ref: "Recipe"
    }]

})

module.exports = mongoose.model('User', UserSchema);
