const knex = require('../../../../db/knexfile');

const create_state = async function (req, res) {

    try {
        console.log(JSON.stringify(req.body));
        const result = await knex("usermanagement.states").insert({
            state: req.body.state,
            state_code: req.body.state_code,
        });
        res.send(result);
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = create_state;