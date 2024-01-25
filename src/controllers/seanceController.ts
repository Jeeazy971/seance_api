import { Request, Response } from 'express';
import { Seance } from '../models/Seance';

export const createSeance = async (req: Request, res: Response) => {
  try {
    const seance = await Seance.create(req.body);
    res.status(201).json(seance);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getAllSeances = async (req: Request, res: Response) => {
  try {
    const seances = await Seance.findAll();
    res.json(seances);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getSeanceById = async (req: Request, res: Response) => {
  try {
    const seance = await Seance.findByPk(req.params.id);
    if (seance) {

      res.json(seance);
    } else {
      res.status(404).json({ error: 'Seance non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateSeance = async (req: Request, res: Response) => {
  try {
    const seance = await Seance.findByPk(req.params.id);
    if (seance) {
      await seance.update(req.body);

      res.json(seance);
    } else {
      res.status(404).json({ error: 'Seance non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteSeance = async (req: Request, res: Response) => {
  try {
    const seance = await Seance.findByPk(req.params.id);
    if (seance) {
      await seance.destroy();

      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Seance non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
