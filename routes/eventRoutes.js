const express = require('express');
const Event = require('../models/players');
const router = express.Router();

router.get('/', async (req, res) => {
    const events = await Event.find();
    res.json(events);
}); 

router.get('/:id', async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.json(event);
}); 

router.post('/', async (req, res) => {    
    const event = new Event(req.body);
    await event.save();
    res.json(event);
}); 

router.put('/:id', async (req, res) => {    
    const event = await Event.findById(req.params.id);
    event.name = req.body.name;
    event.date = req.body.date;
    event.competition = req.body.competition;
    event.place = req.body.place;
    await event.save();
    res.json(event);
});

module.exports = router;