const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const authRoute = require("./routes/auth")
const authUser = require('./routes/user')

const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
  }));

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




app.get('/', function(req, res){

    res.send('<h1>Hello World</h1>')
    console.log("Router Working");
})

app.use("/auth", authRoute)
app.use("/users", authUser)

app.listen(PORT, ()=> {
    console.log("backend running....");
})

