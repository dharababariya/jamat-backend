const knex = require('../../../../db/knexfile');

const get_users = async function (req, res) {

    const result = await knex.select("*").from("usermanagement.users")
    res.send(result);
}

module.exports = get_users;