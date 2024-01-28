const express = require('express');
const router = express.Router();
const myController = require('../controllers/contacts');

router.get('/', myController.getAll);
router.get('/:id', myController.getSingle);
router.post('/', myController.createContact);
router.put('/:id', myController.updateContact);
router.delete('/:id', myController.deleteContact);

module.exports = router;