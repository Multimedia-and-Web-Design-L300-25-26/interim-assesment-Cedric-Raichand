const Crypto = require("../models/Crypto");

// GET ALL CRYPTO
const getAllCrypto = async (req, res) => {
  try {
    const data = await Crypto.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET GAINERS (highest 24h change first)
const getGainers = async (req, res) => {
  try {
    const data = await Crypto.find().sort({ change24h: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET NEW LISTINGS (latest created first)
const getNew = async (req, res) => {
  try {
    const data = await Crypto.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD CRYPTO
const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image,
      change24h,
    });

    res.status(201).json(crypto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllCrypto,
  getGainers,
  getNew,
  addCrypto,
};