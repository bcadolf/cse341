// required
const express = require('express');
const mongodb = require('./data/database');
const bodyParser = require('body-parser');
const app = express();


// ports
const port = process.env.PORT || 3000;

// Routes
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader ('Access-Control-Allow-Origin', '*'); 
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res. setHeader ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use('/', require('./routes'));


// listen and run
mongodb.initDB().then(() => {
    app.listen(port, () => {
        console.log(`db listening and server running on port ${port}`);
    });
}).catch((err) => {
    console.error('db failed to initialize:', err);
});