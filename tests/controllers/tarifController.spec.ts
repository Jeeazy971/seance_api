import request from 'supertest';
import app from '../../index';
import sequelize from '../../config/sequelizeInstance';

describe('Tarif Controller Update and Delete', () => {
    let tarifId: number;

    beforeAll(async () => {
        // Créez un tarif pour la tester
        const tarifData = { type: 'Enfant', prix: 5.0 };
        const createRes = await request(app).post('/tarifs').send(tarifData);
        tarifId = createRes.body.id;
    });

    it('updates a tarif successfully', async () => {
        const updateData = { type: 'Senior', prix: 7.0 };
        const updateRes = await request(app).put(`/tarifs/${tarifId}`).send(updateData);
        expect(updateRes.statusCode).toBe(200);
        expect(updateRes.body.type).toBe(updateData.type);
        expect(updateRes.body.prix).toBe(updateData.prix);
    });

    it('deletes a tarif successfully', async () => {
        const deleteRes = await request(app).delete(`/tarifs/${tarifId}`);
        expect(deleteRes.statusCode).toBe(204);
    });

    afterAll(async () => {
        await sequelize.close();
    });
});
