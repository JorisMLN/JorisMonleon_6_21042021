/* - - - - - USER ROUTER - - - - - */

const express = require('express');
const router = express.Router();

const userCrtl = require('../controllers/user');

router.post('/', userCrtl.login);

module.exports = router;