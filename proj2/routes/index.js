const passport = require('passport');

const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    res.send('Renewable Energy - Toddlers');
});

router.use('/products', require('./products'));

router.use('/distributors', require('./distributors'));

//  oauth login and out
router.get('/login', passport.authenticate('github', (req, res) => {}));

router.get('/logout', function(req, res, next) {
    req.logOut(function(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

module.exports = router;