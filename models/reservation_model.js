const mongoose = require('mongoose');
const ReservationSchema = new mongoose.Schema({
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
  voyageurId: { type: mongoose.Schema.Types.ObjectId, ref: 'Voyageur', required: true },
  dateDebut: { type: Date, required: true },
  dateFin: { type: Date, required: true },
  nombrePersonnes: { type: Number, required: true },
  prixTotal: { type: Number }
});
module.exports = mongoose.model('Reservation', ReservationSchema);