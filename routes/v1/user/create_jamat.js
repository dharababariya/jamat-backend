const knex = require('../../../db/knexfile');

const create_jamat = async function (req, res) {

    try {
        console.log(JSON.stringify(req.body));
        const result = await knex("usermanagement.jamat").insert({
            name: req.body.name,
            city: req.body.city,
            state: req.body.state,
            jamat_code: req.body.jamat_code,
            submited_date: new Date()
        });
        res.send(result);
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = create_jamat;