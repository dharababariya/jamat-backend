const express = require('express');

const router = express.Router();


const delete_member = require('./delete_member');

const delete_state = require('./delete_state');

const delete_cities = require('./delete_city');

const delete_jamat = require('./delete_jamat');

const delete_zone = require('./delete_zone');







router.delete("/api/delete_member", delete_member);

router.delete("/api/delete_state", delete_state);

router.delete("/api/delete_cities", delete_cities);

router.delete("/api/delete_jamat", delete_jamat);

router.delete("/api/delete_zone", delete_zone);

module.exports = router;
