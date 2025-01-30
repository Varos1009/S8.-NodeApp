const express = require("express");
const mongoose = require("mongoose");
const Player = require("../models/players");
const router = express.Router();

// GET all players
router.get("/", async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// GET player by ID (With ID validation)
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid player ID" });
    }

    try {
        const player = await Player.findById(id);
        if (!player) {
            return res.status(404).json({ message: "Player not found" });
        }
        res.json(player);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// POST a new player
router.post("/", async (req, res) => {
    try {
        const player = new Player(req.body);
        await player.save();
        res.status(201).json(player);
    } catch (error) {
        // Handle duplicate dorsal number error
        if (error.code === 11000) {
            return res.status(400).json({ error: "Dorsal number already exists" });
        }
        res.status(400).json({ error: error.message || "Failed to create player" });
    }
});


// PUT (Update) player (With ID validation)
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    console.log("Received ID for update:", id);  // Log the ID to check if it’s valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid player ID" });
    }

    try {
        const player = await Player.findById(id);
        if (!player) {
            return res.status(404).json({ message: "Player not found" });
        }

        Object.assign(player, req.body);
        await player.save();
        res.json(player);
    } catch (error) {
        console.error("Error updating player:", error);  // Log any other errors
        res.status(500).json({ error: "Server error" });
    }
});


// DELETE player (With ID validation)
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid player ID" });
    }

    try {
        const player = await Player.findByIdAndDelete(id);
        if (!player) {
            return res.status(404).json({ message: "Player not found" });
        }

        res.json({ message: "Player deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
