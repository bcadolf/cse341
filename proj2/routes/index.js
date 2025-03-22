const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    res.send('Renewable Energy - Toddlers');
});

router.use('/products', require('./products'));

router.use('/distributors', require('./distributors'));

module.exports = router;