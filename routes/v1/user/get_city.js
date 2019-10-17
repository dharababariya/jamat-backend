const knex = require('../../../db/knexfile');

const get_cities = async function (req, res) {

    const result = await knex("usermanagement.city").select("*");
    res.send(result);
}

module.exports = get_cities;