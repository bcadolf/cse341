const router = require('express').Router();

const productsCtrl = require('../controller/products');
const { validateProduct, checkValidationErrors } = require('../middleware/validation')

router.get('/', productsCtrl.getAll);

router.get('/:id', productsCtrl.getOne);

router.post('/', validateProduct, checkValidationErrors, productsCtrl.addProduct);

router.put('/:id', validateProduct, checkValidationErrors, productsCtrl.updateProduct);

router.delete('/:id', productsCtrl.removeProduct);

module.exports = router;