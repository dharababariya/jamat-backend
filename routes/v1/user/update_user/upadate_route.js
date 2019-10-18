const express = require('express');

const router = express.Router();

const update_state = require('./update_state');

router.put("/api/update_state", update_state);

module.exports = router;