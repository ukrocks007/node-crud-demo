const Comment = require('../models/comment');

const getComments = async (userId) => {
    let comments = await Comment.find({
        userId: userId
    });
    return comments;
}

/*
    data = {
        text: "sdkfjhwdf",
        userId: ObjectId('31u645817623908179823')
    }
*/
const createComment = async (data) => {
    let { text, userId } = data;

    let newComment = new Comment({
        text: text,
        userId: userId
    })

    newComment = await newComment.save();

    return newComment;
}

module.exports = {
    createComment,
    getComments
}