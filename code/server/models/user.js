const {Schema, model} = require('mongoose')


const User = new Schema({
    email:{type: String, require: true, unique: true},
    password:{type: String, require: true, unique: true},
    diskSpace: {type: Number, default: 1024**3*10},
    usedSpace: {type: Number, default: 0},
    files: [{type: Object, ref:'File'}]
})

module.exports = model('User', User)