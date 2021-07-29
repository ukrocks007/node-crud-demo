const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
}, {
    timestamps: true
});

const CommentModel = mongoose.model('comment', Comment);

module.exports = CommentModel;