import { Salle } from './../../src/models/Salle';
import sequelize from '../../config/sequelizeInstance';

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('Salle Model', () => {
    it('should create a salle', async () => {
        const salleData = { nom: 'Salle A', capacite: 100 };
        const salle = await Salle.create(salleData);
        expect(salle.id).toBeDefined();
        expect(salle.nom).toBe(salleData.nom);
        expect(salle.capacite).toBe(salleData.capacite);
    });

    afterAll(async () => {
        await sequelize.close();
    });
});
