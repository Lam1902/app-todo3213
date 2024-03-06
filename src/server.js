const express = require('express')
const path = require('path')

const connection = require('./config/database')
const configViewEngine = require('./config/viewengine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888;      // set port
const hostname = process.env.HOST_NAME;     // set hostname



configViewEngine(app)   // cấu hính cho app
app.use('/', webRoutes )    



app.listen(port, hostname,  ()=> {
    console.log('Running on ', port)
})