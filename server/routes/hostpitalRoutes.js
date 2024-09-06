const express = require("express");
const { getFilteredHospitals } = require("../controllers/hospital");
const { getFilteredAyushCenters } = require("../controllers/ayushController");
const { createHealthCard } = require("../controllers/healthCardController");
const router = express.Router();

router.route("/hospitals").get(getFilteredHospitals);
router.route("/ayush/hospitals").get(getFilteredAyushCenters);
router.route('/healthCard').post(createHealthCard)


module.exports = router;
