/**
 * @swagger
 * /tarifs:
 *   get:
 *     summary: Liste de tous les tarifs
 *     responses:
 *       200:
 *         description: Retourne tous les tarifs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarif'
 *   post:
 *     summary: Ajoute un nouveau tarif
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tarif'
 *     responses:
 *       201:
 *         description: Nouveau tarif ajouté
 * /tarifs/{id}:
 *   get:
 *     summary: Trouve un tarif par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du tarif
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails du tarif
 *   put:
 *     summary: Met à jour un tarif par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du tarif à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tarif'
 *     responses:
 *       200:
 *         description: Tarif mis à jour
 *   delete:
 *     summary: Supprime un tarif par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du tarif à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Tarif supprimé
 */
