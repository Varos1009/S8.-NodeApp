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
        direction: "Calle Paseo de Cervantes, 15, 01007 Vitoria-Gasteiz, Spain",
        lat: 42.846704,
        lng: -2.671661,
        city: "Vitoria-Gasteiz",
        country: "Spain"
    },
    {
        club: "Athletic Bilbao",
        stadium: "Estadio San Mamés",
        direction: "Rafael Moreno Pitxitxi Kalea, s/n, 48013 Bilbao, Spain",
        lat: 43.264141,
        lng: -2.949452,
        city: "Bilbao",
        country: "Spain"
    },
    {
        club: "Atlético Madrid",
        stadium: "Estadio Wanda Metropolitano",
        direction: "Av. de Luis Aragonés, 4, 28022 Madrid, Spain",
        lat: 40.4362,
        lng: -3.5995,
        city: "Madrid",
        country: "Spain"
    },
    {
        club: "Barcelona",
        stadium: "Estadi Olímpic Lluís Companys",
        direction: "Passeig Olímpic, 15-17, 08038 Barcelona, Spain",
        lat: 41.3635,
        lng: 2.1581,
        city: "Barcelona",
        country: "Spain"
    },
    {
        club: "Celta Vigo",
        stadium: "Estadio de Balaídos",
        direction: "Rúa Val Miñor, 36, 36210 Vigo, Spain",
        lat: 42.2116,
        lng: -8.7404,
        city: "Vigo",
        country: "Spain"
    },
    {
        club: "Espanyol",
        stadium: "RCDE Stadium",
        direction: "Av. del Baix Llobregat, 100, 08940 Cornellà de Llobregat, Barcelona, Spain",
        lat: 41.3474,
        lng: 2.0758,
        city: "Barcelona",
        country: "Spain"
    },
    {
        club: "Getafe",
        stadium: "Coliseum Alfonso Pérez",
        direction: "Av. Teresa de Calcuta, s/n, 28903 Getafe, Madrid, Spain",
        lat: 40.3258,
        lng: -3.7142,
        city: "Getafe",
        country: "Spain"
    },
    {
        club: "Girona",
        stadium: "Estadi Montilivi",
        direction: "Av. Montilivi, 141, 17003 Girona, Spain",
        lat: 41.9629,
        lng: 2.8357,
        city: "Girona",
        country: "Spain"
    },
    {
        club: "Las Palmas",
        stadium: "Estadio Gran Canaria",
        direction: "Av. de la Feria, s/n, 35013 Las Palmas de Gran Canaria, Spain",
        lat: 28.0997,
        lng: -15.4528,
        city: "Las Palmas",
        country: "Spain"
    },
    {
        club: "Leganés",
        stadium: "Estadio Municipal de Butarque",
        direction: "Calle Arquitectura, s/n, 28914 Leganés, Madrid, Spain",
        lat: 40.3347,
        lng: -3.7646,
        city: "Leganés",
        country: "Spain"
    },
    {
        club: "Mallorca",
        stadium: "Estadi de Son Moix",
        direction: "Camí dels Reis, s/n, 07011 Palma, Illes Balears, Spain",
        lat: 39.5914,
        lng: 2.6308,
        city: "Palma de Mallorca",
        country: "Spain"
    },
    {
        club: "Osasuna",
        stadium: "Estadio El Sadar",
        direction: "Ctra. Zaragoza, km 3, s/n, 31192 Pamplona, Navarra, Spain",
        lat: 42.7961,
        lng: -1.6374,
        city: "Pamplona",
        country: "Spain"
    },
    {
        club: "Rayo Vallecano",
        stadium: "Estadio de Vallecas",
        direction: "Calle Payaso Fofó, s/n, 28018 Madrid, Spain",
        lat: 40.3912,
        lng: -3.6585,
        city: "Madrid",
        country: "Spain"
    },
    {
        club: "Real Betis",
        stadium: "Estadio Benito Villamarín",
        direction: "Av. de Heliópolis, s/n, 41012 Sevilla, Spain",
        lat: 37.3564,
        lng: -5.9812,
        city: "Seville",
        country: "Spain"
    },
    {
        club: "Real Madrid",
        stadium: "Santiago Bernabeu",
        direction: "Calle de Santiago Bernabeu, 1, 28013 Madrid, Spain",
        lat: 40.4531,
        lng: -3.6884,
        city: "Madrid",
        country: "Spain"
    },
    {
        club: "Real Sociedad",
        stadium: "Reale Arena",
        direction: "Paseo de Anoeta, 1, 20014 Donostia-San Sebastián, Gipuzkoa, Spain",
        lat: 43.3012,
        lng: -1.9735,
        city: "San Sebastián",
        country: "Spain"
    },
    {
        club: "Sevilla",
        stadium: "Estadio Ramón Sánchez Pizjuán",
        direction: "Calle Sevilla Fútbol Club, s/n, 41005 Sevilla, Spain",
        lat: 37.3840,
        lng: -5.9700,
        city: "Seville",
        country: "Spain"
    },
    {
        club: "Valencia",
        stadium: "Estadio de Mestalla",
        direction: "Avinguda de Suècia, s/n, 46010 València, Spain",
        lat: 39.4749,
        lng: -0.3583,
        city: "Valencia",
        country: "Spain"
    },
    {
        club: "Valladolid",
        stadium: "Estadio José Zorrilla",
        direction: "Av. Mundial 82, s/n, 47014 Valladolid, Spain",
        lat: 41.6442,
        lng: -4.7616,
        city: "Valladolid",
        country: "Spain"
    },
    {
        club: "Villarreal",
        stadium: "Estadio de la Cerámica",
        direction: "Calle Blasco Ibáñez, 2, 12540 Villarreal, Castellón, Spain",
        lat: 39.9432,
        lng: -0.1037,
        city: "Villarreal",
        country: "Spain"
    }
];


const seedPlaces = async () => {
    try {
        for (let i = 0; i < places.length; i++) {
            await Place.create(places[i]);
        }
        console.log('Places seeded successfully.');
    } catch (err) {
        console.error('Error seeding places:', err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
};

seedPlaces();

