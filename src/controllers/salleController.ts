import { Request, Response } from 'express';
import { Salle } from '../models/Salle';

export const createSalle = async (req: Request, res: Response) => {
  try {
    const salle = await Salle.create(req.body);
    res.status(201).json(salle);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getAllSalles = async (req: Request, res: Response) => {
  try {
    const salles = await Salle.findAll();
    res.json(salles);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getSalleById = async (req: Request, res: Response) => {
  try {
    const salle = await Salle.findByPk(req.params.id);
    if (salle) {
      res.json(salle);
    } else {
      res.status(404).json({ error: 'Salle non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateSalle = async (req: Request, res: Response) => {
  try {
    const salle = await Salle.findByPk(req.params.id);
    if (salle) {
      await salle.update(req.body);
      res.json(salle);
    } else {
      res.status(404).json({ error: 'Salle non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteSalle = async (req: Request, res: Response) => {
  try {
    const salle = await Salle.findByPk(req.params.id);
    if (salle) {
      await salle.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Salle non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
