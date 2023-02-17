const router = require("express").Router()
const Post = require("../model/Post")

// create a post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body)

    try{
        const savePost = await newPost.save()
        res.status(200).json(savePost)

    }catch(err){
        res.status(500).json(err)
    }
})

//update a post
router.put('/:id', async(req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username){
            try{
                const updatePost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set:req.body,
                    },
                    {
                        new:true
                    }
                )
                res.status(200).json(updatePost)

            }catch(err){
                res.status(500).json(err)
            }

        }else{
            res.status(401).json('you can only update your own post')
        }

    }catch(err){
        res.status(500).json(err)
    }
})

//delete a post
router.delete('/:id', async(req, res) => {
    try{
        const post =await Post.findById(req.params.id)
        if(post.username === req.body.username){
            try{
                await post.delete()
                res.status(200).json('Post has been deleted!')
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            res.status(401).json(post.username +" "+ req.body.username+'you can only delete your own post')
        }

    }catch(err){
        res.status(500).json(err)
    }
})

//get a post
router.get('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
})


// get all post
router.get("/", async (req, res) => {
    const username = req.query.user
    const catName = req.query.cat

    try {
      let posts
      if (username) {//get posts by username
        posts = await Post.find({ username: username })
      } else if (catName) {//get posts by category
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        })
      } else {//get all posts
        posts = await Post.find()
      }
      res.status(200).json(posts)
    } catch (error) {
      res.status(404).json(error)
    }
  })
  
module.exports = router