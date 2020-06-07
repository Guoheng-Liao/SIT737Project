const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSessionSchema = new Schema({
    username: {
        type: String,
        default: ''
    },
    userId: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const Session = mongoose.model('Session', UserSessionSchema);

module.exports = Session;