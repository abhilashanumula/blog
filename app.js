const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express();
const blogsRouter = require('./routes/blogs')

app.set("view engine", 'ejs')
app.use(express.urlencoded())
let p = async()=>{
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(db => console.log(' DB connected'))
}
p()

// app.get('/',(req,res)=>{
//     res.render('home')
// })


app.use('/blogs',blogsRouter)


app.listen(3000,()=>console.log("Listening on http://localhost:3000/blogs"))