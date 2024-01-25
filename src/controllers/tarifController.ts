import { Request, Response } from 'express';
import { Tarif } from '../models/Tarif';

export const createTarif = async (req: Request, res: Response) => {
  try {
    const tarif = await Tarif.create(req.body);
    res.status(201).json(tarif);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getAllTarifs = async (req: Request, res: Response) => {
  try {
    const tarifs = await Tarif.findAll();
    res.json(tarifs);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getTarifById = async (req: Request, res: Response) => {
  try {
    const tarif = await Tarif.findByPk(req.params.id);
    if (tarif) {
      res.json(tarif);
    } else {
      res.status(404).json({ error: 'Tarif non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateTarif = async (req: Request, res: Response) => {
  try {
    const tarif = await Tarif.findByPk(req.params.id);
    if (tarif) {
      await tarif.update(req.body);
      res.json(tarif);
    } else {
      res.status(404).json({ error: 'Tarif non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteTarif = async (req: Request, res: Response) => {
  try {
    const tarif = await Tarif.findByPk(req.params.id);
    if (tarif) {
      await tarif.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Tarif non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
