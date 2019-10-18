const express = require('express');

const router = express.Router();


const create_member = require('./create_member');

const create_jamat = require('./create_jamat');

const create_state = require('../create_state');

const create_cities = require('./create_city');

const create_zone = require('../create_zone');


router.post("/api/create_member", create_member);

router.post("/api/create_jamat", create_jamat);

router.post("/api/create_state", create_state);

router.post("/api/create_cities", create_cities);

router.post("/api/create_zone", create_zone);

module.exports = router;
