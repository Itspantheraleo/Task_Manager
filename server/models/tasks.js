const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskScchema = new Schema({
    title :{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required:true
    },
    priority:{
        type: String,
        required:True,
        enum:['low','medium','high'],
        default:'low',

    },
    status:{
        type: String,
        required:True,
        enum:['yettostart','inprogress','completed'],
        default:'yetttostart',
    }
})

module.exports=mongoose.model('Tast',taskScchema)


