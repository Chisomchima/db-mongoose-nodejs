const mongoose = require('mongoose');
const { isEmail } = require('validator')


const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: [true, "please enter a username"] ,
            unique: true,
            
        },
        email:{
            type: String,
            required: [true, "please enter an email"],
            unique: true,
            validate:[isEmail, "please enter a valid email"]
        },
        password:{
            type: String,
            required: [true, "please enter a password"] ,
            minlength:[6, "minimum password lenghth is 6 characters"]
        },
        isAdmin:{
            type: Boolean,
            default: false
        }

    },
    {timestamps: true}
);

module.exports = mongoose.model('User', UserSchema);