const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All Fields Are Required!' })
        }
        if (username.length < 5) {
            return res
                .status(400)
                .json({ error: 'Username must have 5 characters' })
        }
        if (password.length < 6) {
            return res
                .status(400)
                .json({ error: 'password must have 6 characters' })
        }

        const checkUsers = await User.findOne({ $or: [{ email }, { username }] })
        if (checkUsers) {
            return res.status(400).json({ error: 'Username and email already exist' })

        } else {
            const hashPass = await bcrypt.hash(password, 10)
            const newUser = new User({ username, email, password: hashPass })
            await newUser.save()
            return res.status(200).json({ success: 'Registration Successful' })

        }
    }
    catch (error) {
        return res.status(400).json({ error: 'Internal Server error' })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: 'All Fields Are Required!' })
        }
        const checkUser = await User.findOne({ email })
        if (checkUser) {
            bcrypt.compare(password, checkUser.password, (err, data) => {
                if (data) {
                    const token = jwt.sign({ id: checkUser._id, email }, process.env.JWT_SECRET, { expiresIn: '30d' }
                    )
                    res.cookie('TaskmanagerToken', token, {
                        httpOnly: true,
                        maxAge: 30 * 24 * 60 * 60 * 1000,
                        secure: process.env.NODE_ENV === 'Production',
                        sameSite: 'None',


                    })
                    return res.status(200).json({ success: "Login Successfully" })

                } else {
                    return res.status(400).json({ error: 'Invalid Credentials' })
                }
            })
        }
    } catch (error) {
        return res.status(400).json({ error: 'Internal Server error' })
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("TaskmanagerToken", {
            httpOnly: true
        })
        res.json({ messege: "Logged Out" })
    } catch (error) {
        return res.status(404).json({ error: "Internal server Error" })
    }
}

module.exports = { register, login, logout } 