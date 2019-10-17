
const knex = require('../../../db/knexfile');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const privatekey = 'smit45#bhayo';
const algorithm = 'aes-256-ctr';
const my_secret = 'ha558moj##ha$$';


const login_user = async (req, res, next) => {



    const { body } = req;
    const { username } = body;
    const { password } = body;

    if (!req.body.username && !req.body.password) {
        res.status(400).json({
            meta: {
                status: '1',
                message: 'Please enter username and password. ⚠️',
            },
            data: {

            }
        })
    } else {
        try {


            encrypted_username = encrypt(req.body.username);
            encrypted_password = encrypt(req.body.password);


            const user = await knex("usermanagement.users")
                .select('*')
                .where('username', encrypted_username)
                .where('password', encrypted_password)


            //checking to make sure the user entered the correct username/password combo
            if (user.length) {
                jwt.sign({ user }, privatekey, { expiresIn: '2h' }, (err, token) => {
                    if (err) { console.log(err) }
                    res.status(201).json({
                        meta: {
                            status: '2',
                            message: 'User login successfully ✅️',
                            token:token
                        },
                        data: {
    
                        }
                    })
                });

            } else {
               // console.log('could not login')
               res.status(424).json({
                meta: {
                    status: '3',
                    message: `Failed ⚠️`
                },
                data: {
    
                }
            })
            }
            // }
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
module.exports = login_user;