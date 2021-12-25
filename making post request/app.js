const express = require('express')
const fs = require('fs');
const http = require('http');
const path = require('path')
const app = express()
const port = 80;

app.use('/static', express.static('static'))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res) => {
    res.status(200).render('index', { title: 'Hey', message: 'Hello there!' })
})
app.post('/', (req, res)=>{
    console.log(req.body)
    res.status(200).send(req.body)
})

app.listen(port, ()=> {
    console.log('listening on port 80 thanks.')
})