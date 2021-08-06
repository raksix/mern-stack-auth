const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
    },
    email: {
        type: String,
        required: true,
        maxlength: 100,
    },
    admin: {
        type: Boolean,
        default: false
    },
    ban: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true,
        maxlength: 100,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;