Création d'une documentation pour votre projet API REST en Node.js :

### Documentation du Projet : API de Gestion de Cinéma

#### Description Générale
L'API de gestion de cinéma permet de gérer les salles, les séances et les tarifs d'un cinéma. Elle est construite avec Node.js et utilise Sequelize pour interagir avec une base de données PostgreSQL.

#### Endpoints

1. **Salles**
   - `GET /salles` : Récupère toutes les salles.
   - `GET /salles/:id` : Récupère une salle par ID.
   - `POST /salles` : Crée une nouvelle salle. Exemple de données : `{ "nom": "Salle 3", "capacite": 120 }`.
   - `PUT /salles/:id` : Met à jour une salle par ID. Données : `{ "nom": "Salle 3", "capacite": 150 }`.
   - `DELETE /salles/:id` : Supprime une salle par ID.

2. **Séances**
   - `GET /seances` : Récupère toutes les séances.
   - `GET /seances/:id` : Récupère une séance par ID.
   - `POST /seances` : Crée une nouvelle séance. Données : `{ "dateHeure": "2023-04-01 19:00:00", "film": "Film C", "salleId": 1 }`.
   - `PUT /seances/:id` : Met à jour une séance par ID. Données : `{ "dateHeure": "2023-04-01 20:00:00", "film": "Film C", "salleId": 1 }`.
   - `DELETE /seances/:id` : Supprime une séance par ID.

3. **Tarifs**
   - `GET /tarifs` : Récupère tous les tarifs.
   - `GET /tarifs/:id` : Récupère un tarif par ID.
   - `POST /tarifs` : Crée un nouveau tarif. Données : `{ "type": "Senior", "prix": 8.00 }`.
   - `PUT /tarifs/:id` : Met à jour un tarif par ID. Données : `{ "type": "Senior", "prix": 7.50 }`.
   - `DELETE /tarifs/:id` : Supprime un tarif par ID.

#### Tests avec Postman
Pour tester ces endpoints avec Postman :
1. Lancez votre API localement, ou avec le lien : https://seance-api-service.onrender.com/salles
2. Ouvrez Postman et configurez une nouvelle requête pour l'endpoint souhaité.
3. Choisissez la méthode appropriée (GET, POST, etc.) et ajoutez les données nécessaires dans le corps de la requête pour les méthodes POST et PUT.
4. Envoyez la requête et analysez la réponse.

node ./data/seed.js
