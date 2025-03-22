const { check, validationResult } = require('express-validator');

// PUT and POST for products
const validateProduct = [
    check('name')
        .isString()
        .isLength({min: 5})
        .withMessage('Product name must be at least 5 charaters.'),
    check('price')
        .isFloat({gt: 0.99})
        .withMessage('Price must be greater than 0.99 cents.'),
    check('form')
        .isIn(['drink', 'tablet', 'dissolving powder', 'sublingual strip'])
        .withMessage('Form must be: drink, tablet, dissolving powder, or sublingual strip.'),
    check('description')
        .isString()
        .withMessage('Must be string.'),
    check('stock')
        .isInt({min: 0})
        .withMessage('Stock must be a non-negative integer.'),
    check('ingredients')
        .isArray()
        .withMessage('Ingredients must be an array.'),
    check('warnings')
        .isArray()
        .withMessage('Ingredients must be an array.'),
    check('size')
        .isIn(['4oz', '8oz', '12oz'])
        .withMessage('Size must be 4oz, 8oz, or 12oz.'),
    check('flavor')
        .isString()
        .withMessage('Flavor must be a string.')
];

// Post and Put for distributor
const validateDistributor = [
    check('companyName')
        .isString()
        .withMessage('Company name must be string.'),
    check('priceTier')
        .isIn(['basic', 'preferred', 'vip', 'sugargiver'])
        .withMessage('priceTier must be: basic, preferred, vip, or sugargiver'),
    check('representative')
        .isString()
        .withMessage('Representative must be a string.'),
    check('email')
        .isEmail()
        .withMessage('Email must be valid'),
    check('phone')
        .isString()
        .isLength({ min: 10, max: 15 })
        .withMessage('Phone number must be between 10 and 15 characters.')
];

const checkValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    next();
};

module.exports = {
    validateProduct,
    validateDistributor,
    checkValidationErrors,
};
