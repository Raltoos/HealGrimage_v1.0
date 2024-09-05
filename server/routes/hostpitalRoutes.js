const express = require("express");
const { getFilteredHospitals } = require("../controllers/hospital");
const router = express.Router();

router.route("/hospitals").get(getFilteredHospitals);


module.exports = router;
