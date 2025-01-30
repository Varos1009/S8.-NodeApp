require('dotenv').config();
const mongoose = require('mongoose');
const Player = require('../models/players'); 

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Sample player data
const players = [
  { id: '1', name: 'Marc Andre Ter Stegen', dorsal: 1, position: 'Goalkeeper', nationality: 'Germany', age: 32 },
  { id: '2', name: 'Iñaki Peña', dorsal: 13, position: 'Goalkeeper', nationality: 'Spain', age: 25 },
  { id: '3', name: 'Wojciech Szczęsny', dorsal: 25, position: 'Goalkeeper', nationality: 'Poland', age: 34 },
  { id: '4', name: 'Pau Cubarsi', dorsal: 2, position: 'Defender', nationality: 'Spain', age: 18 },
  { id: '5', name: 'Alejandro Balde', dorsal: 3, position: 'Defender', nationality: 'Spain', age: 21 },
  { id: '6', name: 'Ronald Araujo', dorsal: 4, position: 'Defender', nationality: 'Uruguay', age: 25 },
  { id: '7', name: 'Iñigo Martínez', dorsal: 5, position: 'Defender', nationality: 'Spain', age: 33 },
  { id: '8', name: 'Andreas Christensen', dorsal: 15, position: 'Defender', nationality: 'Denmark', age: 28 },
  { id: '9', name: 'Jules Kounde', dorsal: 23, position: 'Defender', nationality: 'France', age: 26 },
  { id: '10', name: 'Eric Garcia', dorsal: 24, position: 'Forward', nationality: 'Spain', age: 24 },
  { id: '11', name: 'Gavi', dorsal: 6, position: 'Midfielder', nationality: 'Spain', age: 20 },
  { id: '12', name: 'Pedri', dorsal: 8, position: 'Midfielder', nationality: 'Spain', age: 22 },
  { id: '13', name: 'Pablo Torre', dorsal: 14, position: 'Midfielder', nationality: 'Spain', age: 26 },
  { id: '14', name: 'Fermin López', dorsal: 16, position: 'Midfielder', nationality: 'Spain', age: 21 },
  { id: '15', name: 'Marc Casadó', dorsal: 17, position: 'Midfielder', nationality: 'Spain', age: 21 },
  { id: '16', name: 'Dani Olmo', dorsal: 20, position: 'Midfielder', nationality: 'Spain', age: 26 },
  { id: '17', name: 'Frenkie de Jong', dorsal: 21, position: 'Midfielder', nationality: 'Netherlands', age: 27 },
  { id: '18', name: 'Ferran Torres', dorsal: 7, position: 'Forward', nationality: 'Spain', age: 24 }, 
  { id: '19', name: 'Robert Lewandowski', dorsal: 9, position: 'Forward', nationality: 'Poland', age: 36 },
  { id: '20', name: 'Ansu Fati', dorsal: 10, position: 'Forward', nationality: 'Spain', age: 22 },
  { id: '21', name: 'Raphinha', dorsal: 11, position: 'Forward', nationality: 'Brazil', age: 28 },
  { id: '22', name: 'Pau Victor', dorsal: 18, position: 'Forward', nationality: 'Spain', age: 23 },
  { id: '23', name: 'Lamin Yamal', dorsal: 19, position: 'Forward', nationality: 'Spain', age: 17 },
];

// Insert players into the database
const seedPlayers = async () => {
  try {
    await Player.deleteMany({});
    const insertedPlayers = await Player.insertMany(players);
    console.log('Players seeded successfully:', insertedPlayers);
  } catch (err) {
    console.error('Error seeding players:', err);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
};

seedPlayers();
