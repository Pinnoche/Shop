require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')


const app = express()

//middleware
app.use(express.json())

//routing 
app.use('/api/user', userRoutes)
//connect to db
mongoose.connect(process.env.MONGOURI)
.then( () => {
    app.listen(process.env.PORT, () => {
        console.log('Connected to DB and listening to Port ', process.env.PORT)
    })
})

