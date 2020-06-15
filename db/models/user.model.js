const mongoose = require('mongoose');

const bcrypt = require('bcrypt');  

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        default: ''
    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    FirstName: {
        type: String,
    },
    LastName: {
        type: String,
    },
    birthday: {
        type: String
    },
    isAdmin: {
        type: Boolean, 
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }, 
    signUpDate: {
        type: Date, 
        default:Date.now()
    }
}, {
    timestamps: true,
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;