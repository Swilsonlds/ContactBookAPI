const express = require('express');
const router = express.Router();
const myController = require('../controllers/contacts');

router.get('/', myController.getAll);
router.get('/contacts/:id', myController.getSingle);
router.post('/contacts/', myController.createContact);
router.put('/contacts/:id', myController.updateContact);
router.delete('/contacts/:id', myController.deleteContact);

module.exports = router;