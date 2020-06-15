const mongoose = require('mongoose');

const bcrypt = require('bcrypt');  //if is no working, delete that. otherwids using it.

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        // trim: true,
        // minlength: 3
        default: ''
    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    // password_confirmation: {
    //     type: String,
    //     required: true
    // },
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
        // require,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false    //if it would be getted the erro, delete this part 'isDeletd'
    }, 
    signUpDate: {
        type: Date, 
        default:Date.now()
    }
}, {
    timestamps: true,
});

// manbey need to change ??
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;