const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
// const model = require('./../models/model')

let blogSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: () => Date.now()
    },
    desc: {
        type:String
    },
    text: {
        type:String
    }

})

const blog = mongoose.model('blog', blogSchema)
let articles;
router.get('/', async (req, res) => {
    //  articles = [{
    //         title: "asf",
    //         created: new Date().toLocaleDateString(),
    //         desc: "desc",
    //         text:"lorem"
    //     },
    //     {
    //         title: "asf2",
    //         created: new Date().toLocaleDateString(),
    //         desc: "desc",
    //         text:"lorem"
    //     },
    //     {
    //         title: "asf3",
    //         created: new Date().toLocaleDateString(),
    //         desc: "desc",
    //         text:"lorem"
    //     }
    // ]
     articles = await blog.find().sort({"date": -1})
    res.render('home', {
        article: articles
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        article: articles
    })
})
router.get('/view/:id',async (req, res) => {
    let content = await blog.findById(req.params.id)
    res.render('view', {
        article: content
    })
})
router.get('/edit/:id',async (req, res) => {
    let content = await blog.findById(req.params.id)
    res.render('edit', {                                                       // edit page
        article: content
    })
})
router.get('/delete/:id',async (req, res) => {
    let content = await blog.deleteOne({"_id" : req.params.id})
    res.redirect('/blogs')
})
router.post('/edit/:id',async (req,res)=>{
    console.log(req.params.id)
    let content = await blog.findById(req.params.id)
    // content.title =  req.body.title,                                         // needs some repair
    // content.desc = req.body.desc,
    // content.text = req.body.text


    res.send(content)
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const newArticle = new blog({
        title: req.body.title,
        desc: req.body.desc,
        text: req.body.text
    })
    try {
        let temp = await newArticle.save();
         res.status(201).redirect(`/blogs`)
    }
    catch(e){
        // res.render('create',{article:articles})
        res.send(e)
    }

    
})



module.exports = router;