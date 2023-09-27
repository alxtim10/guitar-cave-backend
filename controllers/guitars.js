import Guitars from "../models/guitarsModel.js"

export const createGuitar = async (req, res) => {
  try {
    const product = await Guitars.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getGuitars = async (req, res) => {
  try {
    const product = await Guitars.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getGuitarById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Guitars.findOne({ id: id });
    if (!product) {
      return res.status(404).json({ message: `Product ${id} is not exist` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateGuitarById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Guitars.updateOne({ id: id }, { $set: req.body });
    res.send("Item Updated!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
