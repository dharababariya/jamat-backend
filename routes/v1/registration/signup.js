
const knex = require('../../../db/knexfile');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const algorithm = 'aes-256-ctr';
const my_secret = 'ha558moj##ha$$';



const register_user = async (req, res, next) => {
    if (!req.body.username || !req.body.password || !req.body.email || !req.body.firstName) {
        res.status(400).send({ msg: 'Please pass username and password.' })
    } else {
        try {

            let encrypt_username = encrypt(req.body.username);
            let encrypt_password = encrypt(req.body.password);
            const data = req.data
            const token = jwt.sign({ data }, my_secret, {
                expiresIn: '24h' // expires in 24 hours
            });

            //  console.log(token)
            const result = await knex("usermanagement.users")
                .distinct(encrypt_username, encrypt_password, req.body.email)
                .insert({ username: encrypt_username, password: encrypt_password, email: req.body.email, firstName: req.body.firstName, token: token })
                .returning('*')

            res.send(result)

        } catch (error) {

            console.error(error);
        }
    }

}

const encrypt = (text) => {
    var cipher = crypto.createCipher(algorithm, my_secret)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

module.exports = register_user;