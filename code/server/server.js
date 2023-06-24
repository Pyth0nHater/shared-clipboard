const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
const PORT = config.get('serverPort')

const start = async () => {
    try{
        await mongoose.connect



        app.listen(PORT, ()=>{
            console.log(`SERVER IS RUNNING\nhttp://localhost:${PORT}`)
        })
    } catch(error){

    }
}

start()

