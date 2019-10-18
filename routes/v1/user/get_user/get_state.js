const knex = require('../../../../db/knexfile');
/* get states from database*/

const get_state = async function (req, res) {

    const result = await knex("usermanagement.states")
    .select("*")
    .orderBy("state", "asc");
res.send(result);


}
 module.exports = get_state;