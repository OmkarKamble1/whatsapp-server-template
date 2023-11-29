const router = require('express').Router();
const verifyToken = require('../middleware/verifyTokenMiddleware.js');
const { sendMessage } = require('../controller/sendMessage.js');

// # POST route to send message
router.post('/', verifyToken, sendMessage);

module.exports = router;
