const express = require('express')
const app = express()
const path = require('path')

// Homepage
    app.get('/', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/homepage.html'))
    })

// Images
    app.get('/images/puzzle1.PNG', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/images/puzzle1.PNG'))
    })
    app.get('/images/puzzle2.PNG', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/images/puzzle2.PNG'))
    })
    app.get('/images/answer2.PNG', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/images/answer2.PNG'))
    })
    app.get('/images/puzzle3.PNG', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/images/puzzle3.PNG'))
    })

// CSS
    app.get('/style.css', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/style.css'))
    })

// First Puzzle
    app.get('/puzzle1', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/puzzles/puzzle1.html'))
    })
    app.get('/puzzle1/hint', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/hints/hint1.html'))
    })

// Second Puzzle
    app.get('/noErrors', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/puzzles/puzzle2.html'))
    })
    app.get('/noErrors/hint', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/hints/hint2.html'))
    })

// Third Puzzle
    app.get('/bridge', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/puzzles/puzzle3.html'))
    })
    app.get('/bridge/hint', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/hints/hint3.html'))
    })

// Fourth Puzzle
    app.get('/answer', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/puzzles/puzzle4.html'))
    })
    app.get('/answer/hint', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/hints/hint4.html'))
    })

// Fifth Puzzle
    app.get('/threeBrothersFourSisters', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/puzzles/puzzle5.html'))
    })
    app.get('/threeBrothersFourSisters/hint', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/hints/hint5.html'))
    })

// Sixth Puzzle
    app.get('/68', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/puzzles/puzzle6.html'))
    })
    app.get('/68/hint', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/hints/hint6.html'))
    })

// Final page
    app.get('/true', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/final.html'))
    })

// Answer Key
    app.get('/answerKey', (req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/pages/answerKey.html'))
    })

// Error Page
    app.all('*', (req, res) => {
        res.status(404).send(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you were looking for</p>
            <a href='/'>Back Home</a>
        `)
    })

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})