import express from "express";
import { updateHumidite, getHumidite } from "../../controller/humidite.controller";

const router = express.Router();

router.get('/', getHumidite)

router.post('/', updateHumidite)

export default router;