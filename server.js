const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

//app.use is executed every time the server is used
app.use(bodyParser.urlencoded({ extended: false }))

//bodyParser parses the incoming requests in the middleware
app.use(bodyParser.json())

//When the url is entered GET returns the text below
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

app.get('/whatever', (req, res)=>{
    res.send('Hello from whatever')
})

//requests name parameters
app.get('/hello/:name', (req, res)=>{
    res.send('Hello '+req.params.name);
})

//contains the movie objects in an array
app.get('/api/movies' , (req, res)=>{
    const movies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ];

    //returns JSON data
    res.json({
        mymovies:movies
    })
})

//dirname identifies the directory you're in
app.get('/test', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

//requests first and last name and displays it
app.get('/name', (req, res)=>{
    res.send('Hello '+ req.query.firstname + ' ' +req.query.lastname);
})

//sends first and last name to the server and displays it
app.post('/name', (req, res)=>{
    res.send('Hello '+req.body.firstname + ' ' + req.body.lastname);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})