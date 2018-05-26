const router = require('express').Router();
const { wordCtrl } = require('../controllers/index');

router.route('/test').get(wordCtrl.get).post(wordCtrl.post);

module.exports.router = router;