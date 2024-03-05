import { Tarif } from './../../src/models/Tarif';
import sequelize from '../../config/sequelizeInstance';

describe('Tarif Model', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('creates a tarif', async () => {
        const tarifData = { type: 'Adulte', prix: 10.0 };
        const tarif = await Tarif.create(tarifData);
        expect(tarif.id).toBeDefined();
        expect(tarif.prix).toBe(tarifData.prix);
    });

    it('fails to create a tarif with invalid price', async () => {
        await expect(Tarif.create({ type: 'Réduit', prix: -5 })).rejects.toThrow();
    });

    afterAll(async () => {
        await sequelize.close();
    });
});
