const mongoose = require('mongoose');
const connection = "mongodb+srv://hao:testtest00@cluster0/learn-mern-heroku?retryWrites=true&w=majority";
mongoose.connect(connection, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));