const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// =======================
// Middleware
// =======================
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// =======================
// Routes
// =======================
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/crypto", require("./routes/cryptoRoutes"));
app.use("/api/user", require("./routes/userRoutes")); // ✅ NEW

// =======================
// Test route
// =======================
app.get("/", (req, res) => {
  res.send("Coinbase Backend API is running 🚀");
});

// =======================
// Start server
// =======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});