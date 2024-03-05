import request from 'supertest';
import app from '../../index';
import sequelize from '../../config/sequelizeInstance';

beforeEach(async () => {
    await sequelize.sync({ force: true });
});

describe('Seance Controller Update and Delete', () => {
    let seanceId: number;

    beforeAll(async () => {
        // Créez une séance pour la tester
        const seanceData = { dateHeure: new Date(), filmId: 1, salleId: 1 };
        const createRes = await request(app).post('/seances').send(seanceData);
        seanceId = createRes.body.id;
    });

    it('updates a seance successfully', async () => {
        const updateData = { dateHeure: new Date(), filmId: 2, salleId: 1 };
        const updateRes = await request(app).put(`/seances/${seanceId}`).send(updateData);
        expect(updateRes.statusCode).toBe(200);
        expect(updateRes.body.filmId).toBe(updateData.filmId);
    });

    it('deletes a seance successfully', async () => {
        const deleteRes = await request(app).delete(`/seances/${seanceId}`);
        expect(deleteRes.statusCode).toBe(204);
    });

    afterAll(async () => {
        await sequelize.close();
    });
});
