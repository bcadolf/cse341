const router = require('express').Router();

const productsCtrl = require('../controller/products');

router.get('/', productsCtrl.getAll);

router.get('/:id', productsCtrl.getOne);

router.post('/', productsCtrl.addProduct);

router.put('/:id', productsCtrl.updateProduct);

router.delete('/:id', productsCtrl.removeProduct);

module.exports = router;