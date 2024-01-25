"use strict";
/**
 * @swagger
 * /salles:
 *   get:
 *     summary: Liste de toutes les salles
 *     responses:
 *       200:
 *         description: Retourne toutes les salles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Salle'
 *   post:
 *     summary: Ajoute une nouvelle salle
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Salle'
 *     responses:
 *       201:
 *         description: Nouvelle salle ajoutée
 * /salles/{id}:
 *   get:
 *     summary: Trouve une salle par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la salle
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails de la salle
 *   put:
 *     summary: Met à jour une salle par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la salle à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Salle'
 *     responses:
 *       200:
 *         description: Salle mise à jour
 *   delete:
 *     summary: Supprime une salle par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la salle à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Salle supprimée
 */
