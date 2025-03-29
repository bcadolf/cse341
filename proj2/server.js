// required
const express = require('express');
const mongodb = require('./data/database');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');

// ports
const port = process.env.PORT || 3000;

// Routes
app
    .use(bodyParser.json())
    .use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use((req, res, next) => {
        res.setHeader ('Access-Control-Allow-Origin', '*'); 
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
        );
        res. setHeader ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    })
    .use(cors({methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']}))
    .use(cors({origin: '*'}))
    .use('/', require('./routes/index'));

    passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.CALLBAC_URL
    },
    function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user)
});

app.get('/', (req, res) => { res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.displayName}`: 'Logged Out')})

app.get('/github/callback', passport.authenticate('github', {
    failureRedirect: 'api-docs',  session: false
    }),
    (req, res) => {
        req.session.user = req.user;
        res.redirect('/');
    });

// listen and run
mongodb.initDB().then(() => {
    app.listen(port, () => {
        console.log(`db listening and server running on port ${port}`);
    });
}).catch((err) => {
    console.error('db failed to initialize:', err);
});