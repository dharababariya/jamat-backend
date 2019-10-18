const knex = require('../../../../db/knexfile');

const get_district = async function (req, res) {

    const result = await knex("usermanagement.city")
        .distinct("district")
        .select();
    res.send(result);
}

module.exports = get_district;