let express = require("express");
const { enquiryInsert, enquiryList} = require("../../controller/web/enquiryController");

let enquiryRoutes = express.Router();

enquiryRoutes.post('/data-insert', enquiryInsert)
enquiryRoutes.get('/data-list', enquiryList)

module.exports = enquiryRoutes;