const knex = require('../../../db/knexfile');

const delete_state = async function (req, res) {
    try {
        const result = await knex("usermanagement.states")
            .delete()
            .where("id", "=", req.query.id)
        return res
            .status(200)
            .send({ status: 'Successfully Deteted' });
    } catch (error) {
        res.sendStatus(500);
        res.send({ status: 'Fail' });
    }
}

module.exports = delete_state;