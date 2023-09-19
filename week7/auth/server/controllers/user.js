const User = require("../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {secret}= require('../config/jwt');

module.exports = {

    register: (req, res) => {
        User.create(req.body)
            .then( user => res.json(user))
            .catch(err => res.status(400).json(err))
    },

    login: async(req, res) => {
        // User.findOne({email: req.body.email})
        //     .then( user => {
        //         if(user === null){
        //             res.status(400).json({msg: "Invalid Credentials"})
        //         }

        //         if(!bcrypt.compareSync(req.body.password, user.password)){
        //             res.status(400).json({msg: "Invalid Credentials"})
        //         }

        //         const userToken = jwt.sign({
        //                 id: user._id
        //             }, "Keep it secret, keep it safe")
            
        //         res.cookie("usertoken", userToken, {httpOnly: true})
        //                 .json({msg: "success"})
                
        //     })

        const user = await User.findOne({email: req.body.email})

        if (user === null){
            return res.status(400).json({msg: "Invalid Credentials"});
        }

        if(!await bcrypt.compare(req.body.password, user.password)){
            return res.status(400).json({msg: "Invalid Credentials"});
        }

        const userToken = jwt.sign({
            id: user._id
        }, secret)

        res.cookie("usertoken", userToken, {httpOnly: true})
            .json({msg: "success"})

    },

    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.json({msg: "Logged Out!"})
    },

    findAll: (req, res) => {
        User.find()
            .then(allUsers => res.json(allUsers))
            .catch(err => res.status(400).json(err))
    }
}