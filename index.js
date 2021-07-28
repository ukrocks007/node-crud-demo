const express = require('express')
const app = express();
const mongoose = require('mongoose');
const port = 3000;
var bodyParser = require('body-parser')

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

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    try {
        console.log("[Body]=>", req.body);
        let user = req.body;
        user["dateVisited"] = new Date();
        res.status(200).json(user);
    } catch (ex) {
        console.log(ex);
        res.status(500).json(ex);
    }
})

app.listen(port, () => {
    console.log(`Node Crud app listening at http://localhost:${port}`)
})