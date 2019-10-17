


const express = require('express');

const router = express.Router();

const sign_up = require('./signup');

//
//  Sign up user
//
router.post('/api/signup', sign_up);



module.exports = router;