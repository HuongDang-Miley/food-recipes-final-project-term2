
const express = require('express')
const router = express.Router()
const RecipeSchema = require('./Recipe')
const UserSchema = require('../user/User')
const User = require('../user/User')


router.post('/like-recipe', async (req, res, next) => {
    try {
        // find if meal already Exist
        let foundMeal = await RecipeSchema.findOne({ idMeal: req.body.idMeal })
        if (foundMeal) {
            console.log('duplicate meal')
            res.status(400).json({ message: 'This Meal Already Exist', meal: foundMeal })
        } else {
            console.log('before get data')
            let newMeal = await new RecipeSchema({
                idMeal: req.body.idMeal,
                like: req.body.like,
                strMeal: req.body.strMeal,
                strDrinkAlternate: req.body.strDrinkAlternate,
                strCategory: req.body.strCategory,
                strArea: req.body.strArea,
                strMealThumb: req.body.strMealThumb,
                strTags: req.body.strTags,
                strYoutube: req.body.strYoutube,
                strIngredient1: req.body.strIngredient1,
                strIngredient2: req.body.strIngredient2,
                strIngredient3: req.body.strIngredient3,
                strIngredient4: req.body.strIngredient4,
                strIngredient5: req.body.strIngredient5,
                strIngredient6: req.body.strIngredient6,
                strIngredient7: req.body.strIngredient7,
                strIngredient8: req.body.strIngredient8,
                strIngredient9: req.body.strIngredient9,
                strIngredient10: req.body.strIngredient10,
                strIngredient11: req.body.strIngredient11,
                strIngredient12: req.body.strIngredient12,
                strIngredient13: req.body.strIngredient13,
                strIngredient14: req.body.strIngredient14,
                strIngredient15: req.body.strIngredient15,
                strIngredient16: req.body.strIngredient16,
                strIngredient17: req.body.strIngredient17,
                strIngredient18: req.body.strIngredient18,
                strIngredient19: req.body.strIngredient19,
                strIngredient20: req.body.strIngredient20,
                strMeasure1: req.body.strMeasure1,
                strMeasure3: req.body.strMeasure3,
                strMeasure5: req.body.strMeasure5,
                strMeasure6: req.body.strMeasure6,
                strMeasure8: req.body.strMeasure8,
                strMeasure9: req.body.strMeasure9,
                strMeasure10: req.body.strMeasure10,
                strMeasure11: req.body.strMeasure11,
                strMeasure12: req.body.strMeasure12,
                strMeasure13: req.body.strMeasure13,
                strMeasure14: req.body.strMeasure14,
                strMeasure15: req.body.strMeasure15,
                strMeasure16: req.body.strMeasure16,
                strMeasure17: req.body.strMeasure17,
                strMeasure18: req.body.strMeasure18,
                strMeasure19: req.body.strMeasure19,
                strMeasure20: req.body.strMeasure20,
                strSource: req.body.strSource,
                dateModified: req.body.dateModified,
            })
            console.log('after get data', newMeal)
            await newMeal.save()
            console.log('after save newMeal', newMeal)
            let foundUser = await UserSchema.findById(req.body._id)
            console.log('foundUser', foundUser)
            foundUser.favMeals.push(newMeal)
            await foundUser.save()

            res.status(200).json({ message: 'new meal is added', meal: newMeal, user: foundUser })
        }

    }
    catch (e) {
        console.log(e)
        res.status(500).json({ message: 'This meal is not added', error: e })
    }
})

// delete meal
router.delete('/delete-recipe', async (req, res, next) => {
    try {
        let foundMeal = await RecipeSchema.findOne({ idMeal: req.body.idMeal })
        let meal_id = foundMeal._id.toString()
        let foundUser = await User.findById(req.body._id)
        let favMeals = foundUser.favMeals
        // delete meal from user database then save that user database
        let newFavMeals = favMeals.filter(id => id.toString() !== meal_id)
        foundUser.favMeals = newFavMeals
        await foundUser.save()
        // delete meal from recipe database
        await RecipeSchema.findByIdAndDelete(meal_id)
        console.log('newFavMeals', newFavMeals)
        res.status(200).json({
            message: 'found meal and user',
            user: foundUser
        })

    }
    catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Server Error', error: e })
    }
})


module.exports = router
