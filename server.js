const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use('/', require('./routes'))
    .use('/', require('./routes/contacts'))
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    
const port = process.env.PORT || 3000

const MongoClient = require('mongodb')
const mongodb = require('./db/connect')
const dotenv = require('dotenv').config();

mongodb.initDb((err, mongodb) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port)
        console.log(`Connected to database and listening on ${port}`)
    }
});