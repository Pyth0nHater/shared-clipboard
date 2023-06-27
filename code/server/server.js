const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth_routes')
const corsMiddleware = require('./middleware/cors.middleware')

const app = express()
const PORT = config.get('serverPort')

app.use(corsMiddleware)
app.use(express.json())
app.use("", authRouter)


const start = async () => {
    try{
        await mongoose.connect(config.get('dbUrl'))


        app.listen(PORT, ()=>{
            console.log(`SERVER IS RUNNING\nhttp://localhost:${PORT}`)
        })
    } catch(error){
        console.log(error)
    }
}

start()

