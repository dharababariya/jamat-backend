
     const knex = require('../../../../db/knexfile');

     /*  Get member from database */

    const get_member = async function (req, res) {
        const result = await knex("usermanagement.members")
        .select("members.*", "jamat.name as jamat_name")
        .leftJoin("usermanagement.jamat", "jamat.id", "members.jamat_id");
        res.send(result);
    }
module.exports = get_member;
