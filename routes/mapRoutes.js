const express = require('express');
const Places = require('../models/map');
const router = express.Router();

router.get('/', async (req, res) => {
    const maps = await Places.find();
    res.json(maps);
}); 

router.get('/:id', async (req, res) => {
    const map = await Places.findById(req.params.id);
    res.json(map);
});         

router.post('/', async (req, res) => {    
    const map = new Places(req.body);
    await map.save();
    res.json(map);
});     

router.put('/:id', async (req, res) => {    
    const map = await Places.findById(req.params.id);
    map.id = req.body.id;
    map.direction = req.body.direction;
    map.lat = req.body.lat;
    map.lng = req.body.lng;
    map.country = req.body.country;
    await map.save();
    res.json(map);
});     

module.exports = router;