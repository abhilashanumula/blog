const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    const articles = [{
            title: "asf",
            created: new Date().toLocaleDateString(),
            desc: "desc"
        },
        {
            title: "asf2",
            created: new Date().toLocaleDateString(),
            desc: "desc"
        },
        {
            title: "asf3",
            created: new Date().toLocaleDateString(),
            desc: "desc"
        }
    ]
    res.render('home', {
        article: articles
    })
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/',(req,res)=>{
    console.log(req.body)
    res.redirect('/blogs')
})



module.exports = router;