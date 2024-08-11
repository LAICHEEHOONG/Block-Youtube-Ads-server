const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');
// const userController = require('../controllers/userController');

router.post('/', tableController.uploadTableData);
// router.get('/', userController.getAllUsers);

module.exports = router;
