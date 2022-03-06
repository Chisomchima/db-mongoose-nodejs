const router = require('express').Router();
const User = require('../models/users');
const CryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken");

//handle errors
const handleErrors = (err) => {
    let errors = {username: "", email: "", password: ""};

    // vallidation errors
    if(err.massage.includes("user validation failed")){
        Object.values(err.errors).forEach(({properties}) =>{
           errors[properties.path] = properties.message ;
        });
    }
    return(errors)
}

// //duplicate error code

// if (err.code === 11000){
//     errors.email = "that email is registered";
//     errors.username= "that username already exists";
//     return errors;
// }

//registration

router.post('/register', async (req, res) => {
    const newUser = new User ({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try{
        const savedUser = await newUser.save()
        res.status(201).json(savedUser);
    } catch(err) {
        const error = handleErrors(err)
        res.status(500).json(error);
    }

});


//login

router.post('/login', async (req, res) => {
   
    try{
        const user = await User.findOne( {username: req.body.username} ); 
           
        !user && res.status(401).json("wrong credentials");
            

        const hashedPassword = CryptoJS.AES.decrypt(User.password, process.env.PASS_SEC);
        const finishedPassword = hashedPassword.toString(CryptoJS.enc.utf8);

        !finishedPassword && res.status(401).json("wrong credentials");

        const accessToken = jwt.sign(
            {
                _id: user._id,
                isAdmin: user.isAdmin
            },

            process.env.JWT_SEC,
            
            {expiresIn:"3d"}
        );

        const {password, ...others} = user._doc;

        res.status(201).json({...others, accessToken});

    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router