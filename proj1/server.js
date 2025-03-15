
// call express and other required for main app building.
const express = require('express');
const mongodb = require('./data/database');
const bodyParser = require('body-parser');
const app = express();

// Define the port
const port = process.env.PORT || 3000;


// routes
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





// Listen and run
mongodb.initDB((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {console.log(`db listening and node running on port ${port}`)});
    }
});
