const router = require('express').Router();
const userService = require('../services/user');

router.get('/', async (req, res) => {
    try {
        let users = await userService.getUsers();
        res.status(200).json({ users: users });
    } catch (ex) {
        console.log(ex);
        res.status(500).json(ex);
    }
})

router.post('/', async (req, res) => {
    try {
        let newUser = await userService.createUser(req.body);
        res.status(200).json(newUser);
    } catch (ex) {
        console.log(ex);
        res.status(500).json(ex);
    }
})

router.get('/comments', async (req, res) => {
    try {
        let userComments = await userService.getUserComments(req.body.userId);
        res.status(200).json(userComments);
    } catch (ex) {
        console.log(ex);
        res.status(500).json(ex);
    }
})

module.exports = router;