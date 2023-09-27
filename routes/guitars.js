import express from "express";
import {
  getGuitars,
  createGuitar,
  getGuitarById,
  updateGuitarById,
} from "../controllers/guitars.js";

const router = express.Router();

router.get("/", getGuitars);
router.post("/", createGuitar);
router.get("/:id", getGuitarById);
// router.delete("/:id", deleteGuitarById);
router.put("/:id", updateGuitarById);

export default router;
