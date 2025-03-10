
// call express and other required for main app building.
const express = require('express');
const mongodb = require('./data/database')
const app = express();

// Define the port
const port = process.env.PORT || 3000;


// routes
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
