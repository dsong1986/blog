const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const multer = require("multer")
const path = require("path")


const authRoute = require("./routes/auth")
const authUser = require('./routes/user')
const authPost = require('./routes/posts')
const authCat = require('./routes/categories')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use("/images", express.static(path.join(__dirname, "/images")))
mongoose.set('strictQuery', true);
dotenv.config()
var PORT = 3000;
app.use(express.json())


// Connect to Database
mongoose.connect(process.env.CONNECT_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(console.log("Connected to MongoDb"))
.catch((err) => console.log(err))



//---- step : 3
const storage = multer.diskStorage({
    destination: (req, file, callb) => {
      callb(null, "images")
    },
    filename: (req, file, callb) => {
      callb(null, file.originalname)
    },
  })
  const upload = multer({ storage: storage })


  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
  })


app.get('/', function(req, res){

    res.send('<h1>Hello World</h1>')
    console.log("Router Working");
})

app.use("/auth", authRoute)
app.use("/users", authUser)
app.use('/posts', authPost)
app.use("/category", authCat)

app.listen(PORT, ()=> {
    console.log("backend running....");
})

