const router = require("express").Router()
const User = require("../model/User")
const bcrypt = require("bcrypt")
const Post = require('../model/Post')

//Update user information
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
      
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        )
        res.status(200).json(updatedUser)
      } catch (error) {
        res.status(500).json(error)
      }
    }else{
        res.status(401).json("You must provide password for updating!")
    }
    } else {
      res.status(401).json("You can update your account")
    }
  })

  /* 
{
    "userId" : "6332700aeda4d5e6fda5628a",
    "username":"sunil",
    "email": "sunil@gmail.com",
    "password":"sunil"
}
 */
  //delete
  router.delete('/:id', async(req, res) => {
    if(req.body.userId === req.params.id){
        // delete all posts of user
     
        if(req.body.password){
            try{
                const user = await User.findById(req.params.id);
                try{
                    //delete all posts
                    await Post.deleteMany({username:user.username})

                    //then delete account
                    await User.deleteOne({_id: req.params.id})
                    res.status(200).json('User has been deleted...')

                }catch(error){
                    res.status(500).json(error) 
                }
            }catch(error){
                res.status(404).json("User not found")
            }
        }else{
            res.status(401).json('you must provide password to delete')
        }
        
    }else{
        res.status(401).json('you can only delete your own account')
    }
  })


  // Get user informtion by id
  router.get('/:id', async(req,res) => {
    try{
        console.log(req.params.id)
        const user = await User.findById(req.params.id)
       
        const {password, ...other} = user._doc
        res.status(200).json(other)
    }catch(error){
      
        res.status(500).json('User not found')
    }

  })

module.exports = router