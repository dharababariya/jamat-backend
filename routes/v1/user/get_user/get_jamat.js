
 const knex = require('../../../../db/knexfile');

     /*  Get jamat from database */

    const get_jamat = async function (req, res) {
        const result = await knex.select("*").from("usermanagement.jamat");
        res.send(result);
    }
module.exports = get_jamat;
