
const express = require('express');

const router = express.Router();

const signin = require('./signin');

//
//  Sign up user
//
router.post('/api/login', signin);



module.exports = router;