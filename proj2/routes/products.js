const router = require('express').Router();
const { isAuthenticated } = require('../middleware/athenticate')

const productsCtrl = require('../controller/products');
const { validateProduct, checkValidationErrors } = require('../middleware/validation')

router.get('/', productsCtrl.getAll);

router.get('/:id', productsCtrl.getOne);

router.post('/', isAuthenticated, validateProduct, checkValidationErrors, productsCtrl.addProduct);

router.put('/:id', isAuthenticated, validateProduct, checkValidationErrors, productsCtrl.updateProduct);

router.delete('/:id', isAuthenticated, productsCtrl.removeProduct);

module.exports = router;