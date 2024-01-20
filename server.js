const express = require('express');
const app = express();
const port = process.env.PORT || 3000

const MongoClient = require('mongodb')
const mongodb = require('./db/connect')
const dotenv = require('dotenv').config();

app.use('/', require('./routes'))
app.use('/', require('./routes/contacts'))

mongodb.initDb((err, mongodb) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port)
        console.log(`Connected to database and listening on ${port}`)
    }
});