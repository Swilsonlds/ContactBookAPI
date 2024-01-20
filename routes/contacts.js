const express = require('express');
const router = express.Router();
const myController = require('../controllers/contacts');

router.get('/', myController.getData);
router.get('/AllContacts', myController.getAll);
router.get('/:id', myController.getSingle);

module.exports = router;