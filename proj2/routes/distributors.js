const router = require('express').Router();

const distributorCtrl = require('../controller/distributors');

router.get('/', distributorCtrl.getAllDis);

router.get('/:id', distributorCtrl.getOneDis);

router.post('/', distributorCtrl.addNewDis);

router.put('/:id', distributorCtrl.updateDis);

router.delete('/:id', distributorCtrl.removeDis);

module.exports = router;