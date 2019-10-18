const knex = require('../../../../db/knexfile');

const create_cities = async function (req, res) {
    try {
        console.log(JSON.stringify(req.body));
        const result = await knex("usermanagement.city").insert({
            city: req.body.city,
            city_code: req.body.city_code,
        });
        res.send(result);
    } catch (error) {
        res.status(500);
    }
}

module.exports = create_cities;