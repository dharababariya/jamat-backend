const knex = require('../../../../db/knexfile');

const delete_member = async function (req, res) {
    try {

       // console.log(req.query.id)
        const result = await knex("usermanagement.members")
            .where("id", "=", req.query.id)
            .delete()
        return res
            .status(200)
            .send({ status: 'Successfully Deteted' });
    } catch (error) {
        res.sendStatus(500);
        res.send({ status: 'Failure ' })
    }
}

module.exports = delete_member;