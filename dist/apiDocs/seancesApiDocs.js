"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     Seance:
 *       type: object
 *       required:
 *         - dateHeure
 *         - filmId
 *         - salleId
 *       properties:
 *         dateHeure:
 *           type: string
 *           format: date-time
 *         filmId:
 *           type: integer
 *         salleId:
 *           type: integer
 *       example:
 *         dateHeure: "2023-04-01T19:00:00.000Z"
 *         filmId: 1
 *         salleId: 1
 *
 * /seances:
 *   get:
 *     summary: Liste de toutes les séances
 *     responses:
 *       200:
 *         description: Retourne toutes les séances
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Seance'
 *   post:
 *     summary: Ajoute une nouvelle séance
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Seance'
 *     responses:
 *       201:
 *         description: Nouvelle séance ajoutée
 * /seances/{id}:
 *   get:
 *     summary: Trouve une séance par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la séance
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails de la séance
 *   put:
 *     summary: Met à jour une séance par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la séance à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Seance'
 *     responses:
 *       200:
 *         description: Séance mise à jour
 *   delete:
 *     summary: Supprime une séance par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la séance à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Séance supprimée
 */
