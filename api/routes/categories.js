const router = require("express").Router()
const Category = require("../model/Category")

// create a new category
router.post('/', async (req, res) => {
    const category = new Category(req.body)
    try{
        const saveCat = await category.save()
        res.status(200).json(saveCat)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router

//get all category
router.get('/', async (req, res) => {
    try{
        const cat = await Category.find()
        res.status(200).json(cat)

    }catch(err){
        res.status(500).json(err)
    }
})