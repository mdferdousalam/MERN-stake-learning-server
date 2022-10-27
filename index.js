const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 5000;

const subjects = require("./Data/subjects.json")

app.get('/', (req, res) => {
    res.send("Surver running")
})

app.get('/subjects', (req, res) => {
    res.send(subjects)
})


app.listen(port, () => {
    console.log(`serving on port: ${port}`)
})