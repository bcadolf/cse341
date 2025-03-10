
// Require Statements (intial app build)
const bodyParser = require('body-parser');
const express = require('express');
const profRoute = require('./routes/professional');
const app = express();

// Set formatting for any application/json content pulled in
app.use(bodyParser.json());

// Not 100% sure but should be to help prevent CORS errors and I saw several others had that issue in the teams chat 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

//req route to professional data
app.use('/professional', profRoute);


// set port and host
const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})