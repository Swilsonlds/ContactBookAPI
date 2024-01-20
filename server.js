const express = require('express');
const app = express();
const MongoClient = require('mongodb')
const mongodb = require('./db/connect')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000

app.use('/', require('./routes'))

mongodb.initDb((err, mongodb) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port)
        console.log('Connected to database and listening on 3000')
    }
});