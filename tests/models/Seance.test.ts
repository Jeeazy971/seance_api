import { Seance } from './../../src/models/Seance';
import sequelize from '../../config/sequelizeInstance';

describe('Seance Model', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('should create a seance successfully', async () => {
        const seanceData = { dateHeure: new Date(), filmId: 1, salleId: 1 };
        const seance = await Seance.create(seanceData);
        expect(seance.id).toBeDefined();
        expect(seance.filmId).toBe(seanceData.filmId);
    });

    it('should fail to create a seance with invalid data', async () => {
        expect(Seance.create({ dateHeure: new Date() })).rejects.toThrow();
    });

    afterAll(async () => {
        await sequelize.close();
    });
});
