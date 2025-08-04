const enquiryModel = require("../../model/enquiry.model");

let enquiryInsert = (req, res) => {
    let {name , email, phone} = req.body;
    let enquiry = enquiryModel({
        name : name,
        email : email, 
        phone : phone
    })
    enquiry.save().then(() => {
        res.send({status : 1, msg : "data inserted successfully"})
    }).catch((err) => {
        res.send({status : 0, msg : "data wasn't able to be inserted", err : err})
    })
}

let enquiryList = async(req, res) => {
    let enquiryList = await enquiryModel.find();
    res.status(200).json({status : 1, msg : "enquiry list", data : enquiryList})
}
module.exports = {enquiryInsert, enquiryList}