const knex = require('../../../../db/knexfile');
const jwt = require('jsonwebtoken');
const my_secret = 'ha558moj##ha$$';

const create_zone = async function (req, res) {
    console.log(JSON.stringify(req.body));
    const data = req.data
    const token = jwt.sign({ data }, my_secret, {
        expiresIn: '24h' // expires in 24 hours
    });
    console.log(token);

    // const token = getToken(req.headers);

    const result = await knex("usermanagement.zone").insert({
        name: req.body.name,
        zcode: req.body.zcode,
    });
    res.send(result);
}

module.exports = create_zone;