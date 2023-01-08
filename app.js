const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express();
const blogsRouter = require('./routes/blogs')

app.set("view engine", 'ejs')
app.use(express.urlencoded())
//mongoose.connect("mogodb://localhost/nowhere")

app.get('/',(req,res)=>{
    res.render('home')
})


app.use('/blogs',blogsRouter)


app.listen(3000,()=>console.log("Listening on http://localhost:3000"))