const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.use(require('./routes/api-routes.js'))
app.use(require('./routes/html-routes.js'))

app.listen(PORT, () => {
    console.log(`The app is listening on Port ${PORT}`)
})