const Express = require('express')
const PORT = process.env.PORT || 80
const mongoose = require('mongoose')
const cors = require('cors')
const app = Express()
const Post = require('./Post')
// const bodyParser = require('body-parser')
app.use(Express.json())
app.use(cors())
// app.use(Express.urlencoded({extended: false}))
mongoose.connect('mongodb+srv://Yerkanat:Mahaev228322@posts.8lbsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to db')
        app.listen(PORT, () => {
            console.log('Listening on port ' + PORT + '...')
        })
        
    }
})
app.get('/', (req, res) => {
    console.log('///')
    res.send('<h1>HI</h1>')

})

app.post('/login', (req, res) => {
    console.log(req.body)
    console.log(req.body.email)
    console.log(req.body.password)
    if (req.body.email == 'datasci@nu.edu.kz' && req.body.password == '12345') {
        res.send(true)
        res.end()
    } else {
        res.send(false)
        res.end()
    }
    
})

app.post('/commitpost', (req, res) => {
    console.log('commitpost invoked')

    const post = new Post({
        guest: req.body.guestName,
        eventName: req.body.eventName,
        info: req.body.guestInfo,
        text: req.body.eventInfo
    })

    post.save()
    .then((result) => {
        res.send(true)
        res.end()
    })
    .catch((result) => {
        res.send(false) 
        res.end()
    })

})

app.get('/lastpost', (req, res) => {

})

app.get('/allposts', (req, res) => {
    Post.find()
    .then((result) => {
        res.send(result)
    })
})

