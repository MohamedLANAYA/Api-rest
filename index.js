const express = require('express');
const mongoose = require('mongoose');
const destinationRoutes = require('./routes/destination_routes');
const voyageurRoutes = require('./routes/voyageur_routes');
const reservationRoutes = require('./routes/reservation_routes');

const app = express();
app.use(express.json());

app.use('/api/destinations', destinationRoutes);
app.use('/api/voyageurs', voyageurRoutes);
app.use('/api/reservations', reservationRoutes);

mongoose.connect("mongodb://localhost:27017/travel-reservation")
  .then(() => {
    app.listen(9010, () => {
      console.log("Serveur démarré sur le port 9010");
    });
  })
  .catch((error) => {
    console.log("there was and error connecting to mongodb, error");
  });


