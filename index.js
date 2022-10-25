const express = require('express')
const cors = require('cors')
const app = express()

app.arguments(cors())

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Surver running")
})

app.listen(port, () => {
    console.log(`serving on port: ${port}`)
})