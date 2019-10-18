const knex = require('../../../../db/knexfile');

const get_zone = async function (req, res) {

    const result = await knex.select("*").from("usermanagement.zone");
    res.send(result);
}

module.exports = get_zone;