const User = require('../models/user');
const commentService = require('./comment');

const createUser = async (data) => {
    let newUser = new User({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
    });

    newUser = await newUser.save();
    return newUser;
}

const getUsers = async () => {
    let users = await User.find();
    return users;
}

const getUserComments = async (userId) => {
    let user = await User.findById(userId);
    user = JSON.parse(JSON.stringify(user));
    user.comments = await commentService.getComments(userId);
    return user;
}

module.exports = {
    createUser,
    getUsers,
    getUserComments
}