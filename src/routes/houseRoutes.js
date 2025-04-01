const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController");

router.get("/houses", houseController.getAllHouses);
router.get("/houses/:id", houseController.getHouse);
router.post("/houses", houseController.createHouse);
router.put("/houses/:id", houseController.updateHouse);
router.delete("/houses/:id", houseController.deleteHouse);

module.exports = router;