const User = require("../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {secret} = require("../config/jwt");

module.exports = {
    register: (req, res) => {
        User.create(req.body)
            .then( createdUser => res.json(createdUser) )
            .catch( err => res.status(400).json(err) )
    },

    login: async(req, res) => {
        // await DB find request and store in user
        const user = await User.findOne({email: req.body.email});

        // check if user is null
        if (user === null) {
            return res.status(400).json({msg: "Invalid credentials"});
        }

        // await the result of bcrypt comparison and store boolean in validPassword
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        // check whether passwords matched
        if (!validPassword) {
            return res.status(400).json({msg: "Invalid credentials"});
        }
        // create the userToken to be sent to client
        const userToken = jwt.sign({
            id: user._id
        }, secret)
        // create cookie and attaching userToken, then sending to client
        res.cookie("usertoken", userToken, {httpOnly: true})
            .json(user);
    },

    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.json({msg: "Logged out!"});
    },

    findAll: (req, res) => {
        User.find()
            .then(allUsers => res.json(allUsers))
            .catch(err => res.status(400).json(err));
    }
}