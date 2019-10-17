const knex = require('../../../db/knexfile');

/*  Get jamat from database */

const create_member = async function (req, res) {
    console.log(JSON.stringify(req.body));
    const [home_address_id] = await knex("usermanagement.address")
        .insert({
            address: req.body.home.address1,
            state: req.body.home.state,
            district: req.body.home.district,
            city: req.body.home.city,
            pincode: req.body.home.pincode
        })
        .returning("id");
    console.log(JSON.stringify(home_address_id));
    const [work_address_id] = await knex("usermanagement.address")
        .insert({
            address: req.body.work.address1,
            state: req.body.work.state,
            district: req.body.work.district,
            city: req.body.work.city,
            pincode: req.body.work.pincode
        })
        .returning("id");
    const [family_members_id] = await knex("usermanagement.family_members")
        .insert({
            f_name: req.body.fm_name,
            age: req.body.age,
            sex: req.body.sex,
            f_blood_group: req.body.f_blood_group,
            qualification: req.body.qualification,
            f_contact: req.body.f_contact,
        })
        .returning("id");
    console.log(JSON.stringify(family_members_id));

    const result = await knex("usermanagement.members").insert({
        name: req.body.firstname,
        father_name: req.body.middlename,
        surname: req.body.lastname,
        aadhar_no: req.body.aadhar,
        sex: req.body.gender,
        email: req.body.email,
        contact_no: req.body.contact_no,
        jamat_id: req.body.jamatid,
        home_address_id: home_address_id,
        website: req.body.website,
        occupation: req.body.business,
        b_description: req.body.discription,
        work_address_id: work_address_id,
        photo_url: "",
        r_place_own: req.body.rown,
        b_place_own: req.body.bown,
        home_date: new Date(),
        member_id: req.body.member_id,
        blood_group: req.body.blood_group,
        contact_2: req.body.contact_2,
        capable: req.body.capable,
        family_members_id: family_members_id,

    });
    res.send(result);
    console.log(result);
    res.send(home_address_id);

    
}
module.exports = create_member;