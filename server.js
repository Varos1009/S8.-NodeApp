require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Import routes
const playersRoutes = require("./routes/playersRoutes");
const eventRoutes = require("./routes/eventRoutes");
const mapRoutes = require("./routes/mapRoutes");

// Use routes
app.use("/players", playersRoutes);
app.use("/event", eventRoutes);
app.use("/map", mapRoutes);

// ✅ Default home route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Default 404 route
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An internal server error occurred" });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
