const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const {
  saveBlindDesign,
  saveUser,
  saveDesignName,
  getShowroom,
  displayBlindDesign,
  updateDesgin,
  deleteDesign,
} = require("../controllers/blindController");

router.post("/designer", verifyToken, saveBlindDesign);
router.post("/signup", saveUser);
router.post("/projects", verifyToken, saveDesignName);
router.get("/showroom", verifyToken, getShowroom);
router.post("/loadProject", verifyToken, displayBlindDesign);
router.put("/updateDesign", verifyToken, updateDesgin);
router.delete("/deleteDesign", verifyToken, deleteDesign);

module.exports = router;
