const router = require('express').Router();

const contactsCtrl = require('../controllers/contacts');

router.get('/', contactsCtrl.getAll);

router.get('/:id', contactsCtrl.getSingle);

router.post('/', contactsCtrl.createContact);

router.put('/:id', contactsCtrl.updateContact);

router.delete('/:id', contactsCtrl.deleteContact);


module.exports = router;