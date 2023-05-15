const express = require('express')
const app = express()
const port = 3000


const bodyParser = require("body-parser")
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
    // database connect
const connect = require("./db/connect")
const {
    router
} = require('./routes')


router(app)
    // 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})