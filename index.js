//Importing Express
const express = require('express')
// Creating an Express App 
const app = express();
const mongoose = require('mongoose');
const port = 3001;
var bodyParser = require('body-parser')
var morgan = require('morgan')
var cors = require('cors')
//Importing all the models
const User = require('./models/user');

const apis = require('./apis/index');

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

app.use(morgan('tiny'))

app.use(cors())

apis(app);

app.listen(port, () => {
    console.log(`Node Crud app listening at http://localhost:${port}`)
})