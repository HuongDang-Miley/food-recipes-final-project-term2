const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/single-random-recipe',   getASingleRandomRecipe = async () => {
try {
    let aSingleRandomRecipe = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    console.log(aSingleRandomRecipe)
}
catch(e) {
console.log(e)
}
})