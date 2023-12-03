const express = require('express');
const app = express();
const port = process.env.PORT || 12739;
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extented: false }));

const tickets = require('./routes/tickets');
app.use('/tickets', tickets);

const users = require('./routes/users');
app.use('/users', users);

//connect database
const conn_str = "mongodb+srv://rishi4college:ParleG@testcluster.eubxinp.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
.then(() => {
    app.listen(port)
    console.log('MongoDB connection success')
})
.catch(err => {
    console.log(`MongoDB connection error ${err}`)
});