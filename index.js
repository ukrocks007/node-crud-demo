const express = require('express')
const app = express();
const mongoose = require('mongoose');
const port = 3000;
var bodyParser = require('body-parser')

const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/node-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) {
        console.log("[MONGO ERROR]", err);
    } else {
        console.log("MongoDB connected!!");
    }
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    try {
        let users = await User.find();
        res.status(200).json({ users: users });
    } catch (ex) {
        console.log(ex);
        res.status(500).json(ex);
    }
})

app.post('/', async (req, res) => {
    try {
        let newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        });

        newUser = await newUser.save();

        res.status(200).json(newUser);
    } catch (ex) {
        console.log(ex);
        res.status(500).json(ex);
    }
})

app.listen(port, () => {
    console.log(`Node Crud app listening at http://localhost:${port}`)
})