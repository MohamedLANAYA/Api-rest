const Destination = require('../models/destination_model');

// Create a new destination
exports.createDestination = async (req, res) => {
  try {
    const destination = new Destination(req.body);
    await destination.save();
    res.status(201).json(destination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all destinations
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single destination by ID
exports.getDestinationById = async (req, res) => {
    try {
      const destination = await Destination.findById(req.params.id);
      if (!destination) return res.status(404).json({ message: "Destination not found" });
      res.status(200).json(destination);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Update a destination
exports.updateDestination = async (req, res) => {
    try {
      const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!destination) return res.status(404).json({ message: "Destination not found" });
      res.status(200).json(destination);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Delete a destination
exports.deleteDestination = async (req, res) => {
    try {
      const destination = await Destination.findByIdAndDelete(req.params.id);
      if (!destination) return res.status(404).json({ message: "Destination not found" });
      res.status(200).json({ message: "Destination deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


