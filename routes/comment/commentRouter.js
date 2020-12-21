
const express = require('express')
const router = express.Router()
const CommentSchema = require('./Comment')


router.post('/post-comment', async (req, res, next) => {
    
    try {
        
        let newComment = await new CommentSchema({
            idMeal: req.body.idMeal,
            email: req.body.email,
            comment: req.body.comment
        })

console.log(req.body)
        await newComment.save()
        res.status(200).json({ message: 'comment posted successfully,', newComment: newComment })
    }
    catch (e) {
        
        console.log(e.message)
        res.status(500).json({ message: 'This comment is not added', error: e })
    }
})


router.get('/get-all-comments', async (req, res) => {
    try {
        let arrayComments = await CommentSchema.find()
        return res.status(200).json({ message: 'success', arrayComments })
    }
    catch (e) {
        res.status(500).json({ message: 'there an error', e })
    }
})

module.exports = router

