const { Salle, Seance, Tarif } = require('../src/models');
async function seed() {
  // Ajouter des Salles
  await Salle.create({ nom: 'Salle 1', capacite: 150 });
  await Salle.create({ nom: 'Salle 2', capacite: 200 });

  // Ajouter des Seances
  await Seance.create({ dateHeure: '2023-03-01 20:00:00', filmId: 1, salleId: 1 });
  await Seance.create({ dateHeure: '2023-03-02 18:00:00', filmId: 2, salleId: 2 });

  // Ajouter des Tarifs
  await Tarif.create({ type: 'Adulte', prix: 10.00 });
  await Tarif.create({ type: 'Enfant', prix: 7.50 });

  console.log('Données de test ajoutées avec succès');
}

seed().catch(error => {
  console.error('Erreur lors de l\'ajout des données de test:', error);
});
