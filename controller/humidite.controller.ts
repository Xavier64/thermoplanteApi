import { Request, Response } from "express";
import db from "../config/db";

async function getHumidite(req: Request, res: Response) {
  const { data: humiditeData, error: humiditeError } = await db
    .from("capteur")
    .select("*");

  if (humiditeData) {
    res.json(humiditeData);
  }
  if (humiditeError) {
    throw humiditeError;
  }
}

async function updateHumidite(req: Request, res: Response) {
  const { macAddress, humidite } = req.body;
  if (!macAddress || !humidite)
    return res.status(400).json({ error: "Missing queries" });

  const { data, error } = await db
    .from("capteur")
    .select("macAddress, humidite")
    .eq("macAddress", macAddress)
    .single();

  if (data) {
    const { data, error } = await db
      .from("capteur")
      .update({ humidite: humidite })
      .match({ macAddress })
      .select();

    if (error) return res.status(400).json({ error });
    
    return res.status(200).json({ data });
  }

  if (error) {
    const { data, error } = await db
      .from("capteur")
      .insert({
        macAddress,
        humidite,
      })
      .select();

    if (error) return res.status(400).json({ error });
    return res.status(201).json({ data });
  }
}
export { updateHumidite, getHumidite };
