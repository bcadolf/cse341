
// call express and other required for main app building.
const express = require('express');
const app = express();

// Define the port
const port = process.env.PORT || 3000;


// routes
app.use('/', require('./routes'));


// listen for traffic on the port.
app.listen(port, () => {console.log(`running on port ${port}`)});
