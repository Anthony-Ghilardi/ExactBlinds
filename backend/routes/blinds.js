const express = require("express");
const router = express.Router();
const {
  saveBlindDesign,
  saveUser,
  saveDesignName,
  getShowroom,
  displayBlindDesign,
  updateDesgin,
  deleteDesign,
} = require("../controllers/blindController");

router.post("/designer", saveBlindDesign);
router.post("/signup", saveUser);
router.post("/projects", saveDesignName);
router.get("/showroom", getShowroom);
router.post("/loadProject", displayBlindDesign);
router.put("/updateDesign", updateDesgin);
router.delete("/deleteDesign", deleteDesign)

module.exports = router;
