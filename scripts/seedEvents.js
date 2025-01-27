require('dotenv').config();
const mongoose = require('mongoose');
const Event = require('../models/event');

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Sample event data
const events = [
    {
        name: "FC Barcelona vs. Deportivo Alavés",
        date: new Date("2025-02-02T14:00:00"),
        competition: "La Liga",
        place: "Estadi Olímpic Lluís Companys, Barcelona, Spain"
    },
    {
        name: "Valencia CF vs. FC Barcelona",
        date: new Date("2025-02-06T21:30:00"),
        competition: "Copa del Rey",
        place: "Estadio Mestalla, Valencia, Spain"
    },
    {
        name: "Sevilla FC vs. FC Barcelona",
        date: new Date("2025-02-09T21:00:00"),
        competition: "La Liga",
        place: "Estadio Ramón Sánchez-Pizjuán, Seville, Spain"
    },
    {
        name: "FC Barcelona vs. Rayo Vallecano",
        date: new Date("2025-02-17T21:00:00"),
        competition: "La Liga",
        place: "Estadi Olímpic Lluís Companys, Barcelona, Spain"
    },
    {
        name: "UD Las Palmas vs. FC Barcelona",
        date: new Date("2025-02-23T16:00:00"),
        competition: "La Liga",
        place: "Estadio Gran Canaria, Las Palmas, Spain"
    },
    {
        name: "FC Barcelona vs. Real Sociedad",
        date: new Date("2025-03-02T16:00:00"),
        competition: "La Liga",
        place: "Estadi Olímpic Lluís Companys, Barcelona, Spain"
    },
    {
        name: "FC Barcelona vs. Osasuna",
        date: new Date("2025-03-09T16:00:00"),
        competition: "La Liga",
        place: "Estadi Olímpic Lluís Companys, Barcelona, Spain"
    },
    {
        name: "Atlético Madrid vs. FC Barcelona",
        date: new Date("2025-03-16T16:00:00"),
        competition: "La Liga",
        place: "Cívitas Metropolitano, Madrid, Spain"
    },
    {
        name: "FC Barcelona vs. Girona",
        date: new Date("2025-03-30T16:00:00"),
        competition: "La Liga",
        place: "Estadi Olímpic Lluís Companys, Barcelona, Spain"
    },
    {
        name: "FC Barcelona vs. Real Betis",
        date: new Date("2025-04-06T16:00:00"),
        competition: "La Liga",
        place: "Estadi Olímpic Lluís Companys, Barcelona, Spain"
    },
    {
        name: "Leganés vs. FC Barcelona",
        date: new Date("2025-04-13T16:00:00"),
        competition: "La Liga",
        place: "Estadio Butarque, Leganés, Spain"
    },
    {
        name: "FC Barcelona vs. Celta de Vigo",
        date: new Date("2025-04-20T16:00:00"),
        competition: "La Liga",
        place: "Estadi Olímpic Lluís Companys, Barcelona, Spain"
    },
    {
        name: "FC Barcelona vs. Mallorca",
        date: new Date("2025-04-23T20:00:00"),
        competition: "La Liga",
        place: "Estadi Olímpic Lluís Companys, Barcelona, Spain"
    },
    {
        name: "Real Valladolid vs. FC Barcelona",
        date: new Date("2025-05-04T16:00:00"),
        competition: "La Liga",
        place: "Estadio José Zorrilla, Valladolid, Spain"
    },
    {
        name: "FC Barcelona vs. Real Madrid",
        date: new Date("2025-05-11T16:00:00"),
        competition: "La Liga",
        place: "Estadi Olímpic Lluís Companys, Barcelona, Spain"
    },
    {
        name: "Espanyol vs. FC Barcelona",
        date: new Date("2025-05-14T20:00:00"),
        competition: "La Liga",
        place: "Stage Front Stadium, Barcelona, Spain"
    },
    {
        name: "FC Barcelona vs. Villarreal",
        date: new Date("2025-05-18T16:00:00"),
        competition: "La Liga",
        place: "Estadi Olímpic Lluís Companys, Barcelona, Spain"
    },
    {
        name: "Athletic Club vs. FC Barcelona",
        date: new Date("2025-05-25T16:00:00"),
        competition: "La Liga",
        place: "San Mamés, Bilbao, Spain"
    }

]

// Function to seed the events
const seedEvents = async () => {
    try {
        for (let i = 0; i < events.length; i++) {
            await Event.create(events[i]);
        }
        console.log('Events seeded successfully.');
    } catch (err) {
        console.error('Error seeding events:', err);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
};

seedEvents();

    
