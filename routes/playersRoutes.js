const express = require('express');
const Player = require('../models/players');
const router = express.Router();
 
router.get('/', async (req, res) => {
    const players = await Player.find();
    res.json(players);
});

router.get('/:id', async (req, res) => {
    const player = await Player.findById(req.params.id);
    res.json(player);
}); 

router.post('/', async (req, res) => {
    const player = new Player(req.body);
    await player.save();
    res.json(player);
}); 

router.put('/:id', async (req, res) => {
    const player = await Player.findById(req.params.id);
    player.name = req.body.name;
    player.dorsal = req.body.dorsal;
    player.position = req.body.position;
    player.nationality = req.body.nationality;
    player.age = req.body.age;
    await player.save();
    res.json(player);
});

router.delete('/:id', async (req, res) => {
    const player = await Player.findByIdAndDelete(req.params.id);
    res.json(player);
});


module.exports = router;
