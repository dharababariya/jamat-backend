
const knex = require('../../../db/knexfile');
const Joi = require('joi');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const algorithm = 'aes-128-cbc';
const my_secret = 'ha558moj##ha$$';




const register_user = async (req, res, next) => {

    try{

        const input = {
            username:encrypt(req.body.username),
            password:encrypt(req.body.password),
            email:req.body.email,
            first_name:req.body.first_name
        }

        // const data = req.body


        Joi.validate(input, schema, async (err, value) => {

            const new_user = await knex('usermanagement.users')
                .where('username', input.username)
                .select('*');


            if (err) {
                // send a 422 error response if validation fails
                res.status(422).json({
                    meta: {
                        status: '0',
                        message: `⚠️ Enter ${err}`
                    },
                    data: {

                    }

                });

            } else if (new_user.length != 0) {

                return res.status(400).json({
                    meta: {
                        status: '1',
                        message: '⚠️ User Alredy Registered'
                    },
                    data: {

                    }
                })


            } else {

                const get_token = await generate_token();

                input.token = get_token;

               await save_details_in_db(input);

                return res.status(201).json({
                    meta: {
                        status: '2',
                        message: 'User registered successfully ✅️'
                    },
                    data: {

                    }
                })

            }
        })


    } catch (error) {

        // throw error;

        return res.status(424).json({
            meta: {
                status: '3',
                message: `Failed ${error}`
            },
            data: {

            }
        })
        //  return next(error);
    }


const save_details_in_db = async (data) => {

    const result = await knex('usermanagement.users')
        .insert(data);

    return result;

}
}



const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    password:Joi.string().min(6).required(),
    first_name: Joi.string().min(3).max(40).required(),
    email:Joi.string().email()
   
})

const generate_token = async (data) => {
    const token = jwt.sign({ data }, my_secret, {
        expiresIn: '24h' // expires in 24 hours
    });

    return token;
}




const encrypt = (text) => {
    var cipher = crypto.createCipher(algorithm, my_secret)
    // const cipher = crypto.createCipheriv(algorithm,password,iv)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

module.exports = register_user;