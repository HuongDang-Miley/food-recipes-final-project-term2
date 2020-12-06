const mongoose = require('mongoose')

const RecipeSchema = new mongoose.schema({
    idMeal: {
        type: String,
        trim: true,
    },
    strMeal: {
        type: String,
        trim: true,
    },
    strDrinkAlternate: {
        type: String,
        trim: true,
    },
    strCategory: {
        type: String,
        trim: true,
    },
    strArea: {
        type: String,
        trim: true,
    },
    strInstructions: {
        type: String,
        trim: true,
    },
    strMealThumb: {
        type: String,
        trim: true,
    },
    strTags: {
        type: String,
        trim: true,
    },
    strYoutube: {
        type: String,
        trim: true,
    },
    strIngredient1: {
        type: String,
        trim: true,
    },
    strIngredient2: {
        type: String,
        trim: true,
    },
    strIngredient3: {
        type: String,
        trim: true,
    },
    strIngredient4: {
        type: String,
        trim: true,
    },
    strIngredient5: {
        type: String,
        trim: true,
    },
    strIngredient6: {
        type: String,
        trim: true,
    },
    strIngredient7: {
        type: String,
        trim: true,
    },
    strIngredient8: {
        type: String,
        trim: true,
    },
    strIngredient9: {
        type: String,
        trim: true,
    },
    strIngredient10: {
        type: String,
        trim: true,
    },
    strIngredient11: {
        type: String,
        trim: true,
    },
    strIngredient12: {
        type: String,
        trim: true,
    },
    strIngredient13: {
        type: String,
        trim: true,
    },
    strIngredient14: {
        type: String,
        trim: true,
    },
    strIngredient15: {
        type: String,
        trim: true,
    },
    strIngredient16: {
        type: String,
        trim: true,
    },
    strIngredient17: {
        type: String,
        trim: true,
    },
    strIngredient18: {
        type: String,
        trim: true,
    },
    strIngredient19: {
        type: String,
        trim: true,
    },
    strIngredient20: {
        type: String,
        trim: true,
    },
    strMeasure1: {
        type: String,
        trim: true,
    },
    strMeasure3: {
        type: String,
        trim: true,
    },
    strMeasure5: {
        type: String,
        trim: true,
    },
    strMeasure6: {
        type: String,
        trim: true,
    },
    strMeasure8: {
        type: String,
        trim: true,
    },
    strMeasure9: {
        type: String,
        trim: true,
    },
    strMeasure10: {
        type: String,
        trim: true,
    },
    strMeasure11: {
        type: String,
        trim: true,
    },
    strMeasure12: {
        type: String,
        trim: true,
    },
    strMeasure13: {
        type: String,
        trim: true,
    },
    strMeasure14: {
        type: String,
        trim: true,
    },
    strMeasure15: {
        type: String,
        trim: true,
    },
    strMeasure16: {
        type: String,
        trim: true,
    },
    strMeasure17: {
        type: String,
        trim: true,
    },
    strMeasure18: {
        type: String,
        trim: true,
    },
    strMeasure19: {
        type: String,
        trim: true,
    },
    strMeasure20: {
        type: String,
        trim: true,
    },
    strSource: {
        type: String,
        trim: true,
    },
    dateModified: {
        type: String,
        trim: true,
    },
})

module.exports = mongoose.model('Recipe', RecipeSchema);