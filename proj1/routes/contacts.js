const router = require('express').Router();

const contactsCtrl = require('../controllers/contacts');

router.get('/', contactsCtrl.getAll);

router.get('/:id', contactsCtrl.getSingle);

module.exports = router;