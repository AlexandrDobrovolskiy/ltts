const express = require('express');
const lottieController = require('../../controllers/lotties.controller');

const router = express.Router();

router.post('/add', lottieController.add);
router.get('/list', lottieController.list);

module.exports = router;
