const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 5000;

const subjects = require("./Data/subjects.json")

app.get('/', (req, res) => {
    res.send("Surver running api link is: https://b610-lerning-platform-server-side-mauve.vercel.app/subjects ")
})

app.get('/subjects', (req, res) => {
    res.send(subjects)
})


app.listen(port, () => {
    console.log(`serving on port: ${port}`)
})