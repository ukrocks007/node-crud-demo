const router = require('express').Router();
const commentService = require('../services/comment');

router.get('/', async (req, res) => {
    try {
        let comments = await commentService.getComments(req.body.userId);
        res.status(200).json({ comments: comments });
    } catch (ex) {
        console.log(ex);
        res.status(500).json(ex);
    }
})

router.post('/', async (req, res) => {
    try {
        let newComment = await commentService.createComment(req.body);
        res.status(200).json(newComment);
    } catch (ex) {
        console.log(ex);
        res.status(500).json(ex);
    }
})

module.exports = router;