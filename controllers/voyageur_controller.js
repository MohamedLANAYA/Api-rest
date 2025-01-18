const Voyageur = require('../models/voyageur_model');

// Create a new voyageur
exports.createVoyageur = async (req, res) => {
  try {
    const voyageur = new Voyageur(req.body);
    await voyageur.save();
    res.status(201).json(voyageur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all voyageurs
exports.getAllVoyageurs = async (req, res) => {
  try {
    const voyageurs = await Voyageur.find();
    res.status(200).json(voyageurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single voyageur by ID
exports.getVoyageurById = async (req, res) => {
  try {
    const voyageur = await Voyageur.findById(req.params.id);
    if (!voyageur) return res.status(404).json({ message: "Voyageur not found" });
    res.status(200).json(voyageur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a voyageur
exports.updateVoyageur = async (req, res) => {
  try {
    const voyageur = await Voyageur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!voyageur) return res.status(404).json({ message: "Voyageur not found" });
    res.status(200).json(voyageur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a voyageur
exports.deleteVoyageur = async (req, res) => {
  try {
    const voyageur = await Voyageur.findByIdAndDelete(req.params.id);
    if (!voyageur) return res.status(404).json({ message: "Voyageur not found" });
    res.status(200).json({ message: "Voyageur deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
