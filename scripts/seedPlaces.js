require('dotenv').config();
const mongoose = require('mongoose');
const Place = require('../models/map');

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Sample place data
const places = [
    {
        club: "Alavés",
        stadium: "Estadio de Mendizorroza",
        capacity: 19_840,
        direction: "Calle Paseo de Cervantes, 15, 01007 Vitoria-Gasteiz, Spain",
        lat: 42.846704,
        lng: -2.671661,
        city: "Vitoria-Gasteiz",
        community: "Basque Country",
        country: "Spain"
    },
    {
        club: "Athletic Bilbao",
        stadium: "Estadio San Mamés",
        capacity: 53_289,
        direction: "Rafael Moreno Pitxitxi Kalea, s/n, 48013 Bilbao, Spain",
        lat: 43.264141,
        lng: -2.949452,
        city: "Bilbao",
        community: "Basque Country",
        country: "Spain"
    },
    {
        club: "Atlético Madrid",
        stadium: "Estadio Wanda Metropolitano",
        capacity: 68_456,
        direction: "Av. de Luis Aragonés, 4, 28022 Madrid, Spain",
        lat: 40.4362,
        lng: -3.5995,
        city: "Madrid",
        community: "Community of Madrid",
        country: "Spain"
    },
    {
        club: "Barcelona",
        stadium: "Estadi Olímpic Lluís Companys",
        capacity: 54_367,
        direction: "Passeig Olímpic, 15-17, 08038 Barcelona, Spain",
        lat: 41.3635,
        lng: 2.1581,
        city: "Barcelona",
        community: "Catalonia",
        country: "Spain"
    },
    {
        club: "Celta Vigo",
        stadium: "Estadio de Balaídos",
        capacity: 29_000,
        direction: "Rúa Val Miñor, 36, 36210 Vigo, Spain",
        lat: 42.2116,
        lng: -8.7404,
        city: "Vigo",
        community: "Galicia",
        country: "Spain"
    },
    {
        club: "Espanyol",
        stadium: "RCDE Stadium",
        capacity: 40_000,
        direction: "Av. del Baix Llobregat, 100, 08940 Cornellà de Llobregat, Barcelona, Spain",
        lat: 41.3474,
        lng: 2.0758,
        city: "Barcelona",
        community: "Catalonia",
        country: "Spain"
    },
    {
        club: "Getafe",
        stadium: "Coliseum Alfonso Pérez",
        capacity: 17_393,
        direction: "Av. Teresa de Calcuta, s/n, 28903 Getafe, Madrid, Spain",
        lat: 40.3258,
        lng: -3.7142,
        city: "Getafe",
        community: "Community of Madrid",
        country: "Spain"
    },
    {
        club: "Girona",
        stadium: "Estadi Montilivi",
        capacity: 14_624,
        direction: "Av. Montilivi, 141, 17003 Girona, Spain",
        lat: 41.9629,
        lng: 2.8357,
        city: "Girona",
        community: "Catalonia",
        country: "Spain"
    },
    {
        club: "Las Palmas",
        stadium: "Estadio Gran Canaria",
        capacity: 32_392,
        direction: "Av. de la Feria, s/n, 35013 Las Palmas de Gran Canaria, Spain",
        lat: 28.0997,
        lng: -15.4528,
        city: "Las Palmas",
        community: "Canary Islands",
        country: "Spain"
    },
    {
        club: "Leganés",
        stadium: "Estadio Municipal de Butarque",
        capacity: 12_454,
        direction: "Calle Arquitectura, s/n, 28914 Leganés, Madrid, Spain",
        lat: 40.3347,
        lng: -3.7646,
        city: "Leganés",
        community: "Community of Madrid",
        country: "Spain"
    },
    {
        club: "Mallorca",
        stadium: "Estadi de Son Moix",
        capacity: 23_142,
        direction: "Camí dels Reis, s/n, 07011 Palma, Illes Balears, Spain",
        lat: 39.5914,
        lng: 2.6308,
        city: "Palma de Mallorca",
        community: "Balearic Islands",
        country: "Spain"
    },
    {
        club: "Osasuna",
        stadium: "Estadio El Sadar",
        capacity: 23_576,
        direction: "Ctra. Zaragoza, km 3, s/n, 31192 Pamplona, Navarra, Spain",
        lat: 42.7961,
        lng: -1.6374,
        city: "Pamplona",
        community: "Navarre",
        country: "Spain"
    },
    {
        club: "Rayo Vallecano",
        stadium: "Estadio de Vallecas",
        capacity: 14_708,
        direction: "Calle Payaso Fofó, s/n, 28018 Madrid, Spain",
        lat: 40.3912,
        lng: -3.6585,
        city: "Madrid",
        community: "Community of Madrid",
        country: "Spain"
    },
    {
        club: "Real Betis",
        stadium: "Estadio Benito Villamarín",
        capacity: 60_721,
        direction: "Av. de Heliópolis, s/n, 41012 Sevilla, Spain",
        lat: 37.3564,
        lng: -5.9812,
        city: "Seville",
        community: "Andalusia",
        country: "Spain"
    },
    {
        club: "Real Madrid",
        stadium: "Santiago Bernabéu",
        capacity: 83_168,
        direction: "Calle de Santiago Bernabeu, 1, 28013 Madrid, Spain",
        lat: 40.4531,
        lng: -3.6884,
        city: "Madrid",
        community: "Community of Madrid",
        country: "Spain"
    },
    {
        club: "Real Sociedad",
        stadium: "Reale Arena",
        capacity: 39_313,
        direction: "Paseo de Anoeta, 1, 20014 Donostia-San Sebastián, Gipuzkoa, Spain",
        lat: 43.3012,
        lng: -1.9735,
        city: "San Sebastián",
        community: "Basque Country",
        country: "Spain"
    },
    {
        club: "Sevilla",
        stadium: "Estadio Ramón Sánchez Pizjuán",
        capacity: 43_883,
        direction: "Calle Sevilla Fútbol Club, s/n, 41005 Sevilla, Spain",
        lat: 37.3840,
        lng: -5.9700,
        city: "Seville",
        community: "Andalusia",
        country: "Spain"
    },
    {
        club: "Valencia",
        stadium: "Estadio de Mestalla",
        capacity: 49_430,
        direction: "Avinguda de Suècia, s/n, 46010 València, Spain",
        lat: 39.4749,
        lng: -0.3583,
        city: "Valencia",
        community: "Valencian Community",
        country: "Spain"
    },
    {
        club: "Valladolid",
        stadium: "Estadio José Zorrilla",
        capacity: 27_618,
        direction: "Av. Mundial 82, s/n, 47014 Valladolid, Spain",
        lat: 41.6442,
        lng: -4.7616,
        city: "Valladolid",
        community: "Castile and León",
        country: "Spain"
    },
    {
        club: "Villarreal",
        stadium: "Estadio de la Cerámica",
        capacity: 23_500,
        direction: "Calle Blasco Ibáñez, 2, 12540 Villarreal, Castellón, Spain",
        lat: 39.9432,
        lng: -0.1037,
        city: "Villarreal",
        community: "Valencian Community",
        country: "Spain"
    }
];



const seedPlaces = async () => {
    try {
        await Place.deleteMany({}); // Deletes all existing records in the collection
        console.log('Old data deleted.');

        await Place.insertMany(places); // Insert new data
        console.log('Places seeded successfully.');
    } catch (err) {
        console.error('Error seeding places:', err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
};


seedPlaces();

