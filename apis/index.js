const userRoutes = require('./user');
const commentRoutes = require('./comment');

module.exports = (app) => {
    // http://localhost:3000/user/*
    app.use('/api/user', userRoutes);

    app.use('/api/comment', commentRoutes);
}