const express = require('express');
const gameController = require('../controlers/game');
const verifier = require('../authGuards/verifiers');

const router = express.Router();

router.get('/start', gameController.start);
router.get('/guess', verifier.sessionVerifier ,gameController.guess);
router.get('/hiscores', gameController.hiscores);

module.exports = router;
