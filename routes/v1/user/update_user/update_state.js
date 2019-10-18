const knex = require('../../../../db/knexfile');


const update_state = async function (req, res) {
   
        // console.log(`id ${req.params.id}`);
        await knex("usermanagement.states")
            .where("id", "=", req.params.id)
            .update("state_code", req.body.state_code);
        res.send();
}

module.exports = update_state;