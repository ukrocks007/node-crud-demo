const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    firstName: {
        type: String
    },
    lastName: String,
    email: {
        type: String,
        unique: true
    }
});

const UserModel = mongoose.model('User', User);

module.exports = UserModel;