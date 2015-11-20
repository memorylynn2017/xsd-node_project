var express = require('express');
var router = express.Router();
var user_controller = require('../controller/user_controller');
/* GET home page. */
router.get('/', user_controller.register);
router.post('/register_action', user_controller.register_action);
router.get('/to_login', user_controller.to_login);
router.post('/login', user_controller.login);
module.exports = router;
