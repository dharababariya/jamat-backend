
const express = require('express');

const router = express.Router();

const get_members = require('./get_member');

const get_jamat = require('./get_jamat');

const get_state = require('./get_state');

const get_district = require('./get_district');

const get_cities = require('./get_city');

const get_zone = require('./get_zone');

const get_users = require('./get_users');

 



//
// Member details
//


router.get("/api/get_member",  get_members);

router.get("/api/get_jamat", get_jamat);

router.get("/api/get_states", get_state);

router.get("/api/get_district", get_district);

router.get("/api/get_cities", get_cities);

router.get("/api/get_zone", get_zone);

router.get("/api/get_users", get_users);



module.exports = router;