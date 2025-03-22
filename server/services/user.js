const User = require('../models/user')
const bcrypt = require('bcryptjs')
const register = async (req,res)=>{
    try{
        const{ username,email,password}=req.body
        if(!username || !email || !password){
            return res.status(404).json({error:'All Fields Are Required!'})
        }
        if(username.length < 5){
            return res
            .status(404)
            .json({error:'Username must have 5 characters'})
        }
        if(password.length <6){
            return res
            .status(404)
            .json({error:'password must have 6 characters'})
        }

    const checkUsers = await User.findOne({$or:[{email},{username}]})
    if(checkUsers){
        return res.status(404).json({error:'Username and email already exist'})

    }else{
        const hashPass = await bcrypt.hash(password,10)
        const newUser=new User({username,email,password:hashPass})
        await newUser.save()
        return res.status(200).json({success:'Registration Successful'})

    }
    }
    catch(error){
        return res.status(404).json({error:'Internal Server error'})
    }
}

module.exports = {register} 