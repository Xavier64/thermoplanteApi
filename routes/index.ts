import express from "express";
import humidite from './includes/humidite';

const router = express.Router();

router.use('/humidite', humidite)

export default router;