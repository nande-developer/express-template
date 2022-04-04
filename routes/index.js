const express = require('express');
const router = express.Router();

const ExampleHandler = require('../handlers/example');

router.get('/', ExampleHandler.handleExample);

module.exports = router;
