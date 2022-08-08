const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/views/home-page.html')
}) 

app.get('/about', (req, res) => {
    res.status(200).sendFile(__dirname + '/views/about.html')
}) 

app.get('/works', (req, res) => {
    res.status(200).sendFile(__dirname + '/views/works.html')
}) 


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})