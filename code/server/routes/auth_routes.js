const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require("express-validator")
const jwt = require('jsonwebtoken')
const config = require('config')

const router = new Router()

router.post("/registration",
        [
            check("email", "Uncorrect email").isEmail(),
            check("password", "Password length from 7 to 20").isLength({min:7, max:20})
        ],
    async (req, res) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message: "Uncorrect request ", errors})
        }

        const {email, password} = req.body

        const userExist = await User.findOne({email})

        if (userExist){
            return res.status(400).json({message: `${email}  has already been registered`})
        }

        const hashPassword = await bcrypt.hash(password, 8)
        const newUser = new User({email, password: hashPassword})
        const user = new User({email})
        await user.save()

        return res.json({message: "New user was created"})

    } catch(error){
        console.log(error)
        res.send({message: "Server error"})
    }
})




router.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user){
            return res.status(404).json({message: "User not found"})
        }

        const isPassValid = bcrypt.compareSync(password, user.password)

        if(!isPassValid){
            return res.status(404).json({message: "Invalid password"})
        }

        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
        return res.json({
            token,
            user:{
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace
            }
        })


    } catch(error){
        console.log(error)
        res.send({message: "Server error"})
    }
})
module.exports = router