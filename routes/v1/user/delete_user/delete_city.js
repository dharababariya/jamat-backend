const knex = require('../../../../db/knexfile');

const delete_cities = async function (req, res) {
    try {
        const result = await knex("usermanagement.city")
            .delete()
            .where("id", "=", req.params.id)
        return res
            .status(200)
            .send({ status: 'Successfully Deteted' });
    } catch (error) {
        res.sendStatus(500);
        res.send({ status: 'Fail' });
    }
}

module.exports = delete_cities;