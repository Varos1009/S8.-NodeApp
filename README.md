# Backend API for InproCode

This is the backend API for the InproCode web application, built with **Node.js**, **Express**, and connected to **MongoDB**. The API handles requests related to players, events, and map data.

## Live API

You can access the live API at: [https://s8-nodeapp.onrender.com](https://s8-nodeapp.onrender.com)

## Technologies

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Framework for building APIs with Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Loads environment variables.
- **Cors**: Package to allow cross-origin requests.
- **Morgan**: HTTP request logger middleware.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Varos1009/S8.-NodeApp.git
cd S8.-NodeApp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
PORT=5000
```

### 4. Start the Server

```bash
node server.js
```

## API Endpoints

### Player Endpoints

- `GET /players`: Get all players.
- `POST /players`: Create a new player.
- `PUT /players/:id`: Update a player by ID.
- `DELETE /players/:id`: Delete a player by ID.

### Event Endpoints

- `GET /event`: Get all events.
- `POST /event`: Create a new event.
- `PUT /event/:id`: Update an event by ID.
- `DELETE /event/:id`: Delete an event by ID.

### Map Data Endpoints

- `GET /map`: Get all map data.
- `POST /map`: Create a new map.
- `PUT /map/:id`: Update a map by ID.
- `DELETE /map/:id`: Delete a map by ID.

