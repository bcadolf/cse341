const router = require('express').Router();

const distributorCtrl = require('../controller/distributors');
const { validateDistributor, checkValidationErrors } = require('../middleware/validation')
const { isAuthenticated } = require('../middleware/athenticate')

router.get('/', isAuthenticated, distributorCtrl.getAllDis);

router.get('/:id', distributorCtrl.getOneDis);

router.post('/', isAuthenticated, validateDistributor, checkValidationErrors, distributorCtrl.addNewDis);

router.put('/:id', validateDistributor, checkValidationErrors, distributorCtrl.updateDis);

router.delete('/:id', distributorCtrl.removeDis);

module.exports = router;