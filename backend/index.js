const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const express = require('express')
const cors=require('cors');
const app = express()
const dotenv = require('dotenv').config();
// const PORT = process.env.PORT || 5000
// const DB_URL = process.env.MONGO_URL
app.use(express.json())
app.use(cors('*'));

app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ "msg": "This has CORS enabled 🎈" })
  })
app.use(bodyParser.json())
// app.use(express.static("public"))
app.use(bodyParser.urlencoded({
  extended:true
}))

const DB = "mongodb+srv://vaibhavmsd39:vaibhav123@cluster0.ffpzgxn.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
  console.log("Connected")
}).catch((err)=>console.log(err))


app.use('/api/auth',require('./routes/auth_user'))
app.use('/api/auth1',require('./routes/auth_institute'))
app.use('/api/add',require('./routes/add_school'))
app.use('/api/addRev',require('./routes/reviews'))
app.use('/api/add1',require('./routes/add_college'))


app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})
