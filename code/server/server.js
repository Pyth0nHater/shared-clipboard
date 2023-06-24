const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth_routes')


const app = express()
const PORT = config.get('serverPort')


app.use(express.json())
app.use("/api/auth", authRouter)


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

