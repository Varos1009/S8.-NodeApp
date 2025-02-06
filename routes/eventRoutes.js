const express = require('express');
const Event = require('../models/event');
const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Get a single event by ID
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Create a new event
const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime()); // Check if date is valid
};

router.post('/', async (req, res) => {
    const { name, date, competition, place } = req.body;

    if (!name || !date) {
        return res.status(400).json({ message: "Missing required fields: name or date" });
    }

    if (!isValidDate(date)) {
        return res.status(400).json({ message: "Invalid date format" });
    }

    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(400).json({ message: "Bad Request, invalid data" });
    }
});


// Update an event
router.put('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        // Update event fields
        event.name = req.body.name;
        event.date = req.body.date;
        event.competition = req.body.competition;
        event.place = req.body.place;

        await event.save();
        res.json(event);  // Return the updated event
    } catch (error) {
        res.status(400).json({ message: "Bad Request, invalid data" });
    }
});

// Delete an event
router.delete('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
