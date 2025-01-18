const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
    nom: { type: String, required: true},
    pays: {type: String, required: true},
    prixParNuit: { type:Number, required: true},
    description:{ type: String}
});

module.exports = mongoose.model('Destination', DestinationSchema);