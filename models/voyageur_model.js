const mongoose = require('mongoose');

const VoyageurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telephone: { type: String }
});

module.exports = mongoose.model('Voyageur', VoyageurSchema);
