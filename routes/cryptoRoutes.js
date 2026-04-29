const express = require("express");
const router = express.Router();

const {
  getAllCrypto,
  getGainers,
  getNew,
  addCrypto,
} = require("../controllers/cryptoController");

// routes
router.get("/", getAllCrypto);
router.get("/gainers", getGainers);
router.get("/new", getNew);
router.post("/", addCrypto);

module.exports = router;