import request from 'supertest';
import app from '../../index';
import sequelize from '../../config/sequelizeInstance';

beforeEach(async () => {
    await sequelize.sync({ force: true });
});

describe('Salle Controller Update and Delete', () => {
    let salleId: number;

    beforeAll(async () => {
        const res = await request(app)
            .post('/salles')
            .send({ nom: 'Salle B', capacite: 50 });
        salleId = res.body.id;
    });

    it('updates a salle successfully', async () => {
        const res = await request(app)
            .put(`/salles/${salleId}`)
            .send({ nom: 'Salle B Updated', capacite: 60 });
        expect(res.statusCode).toBe(200);
        expect(res.body.nom).toBe('Salle B Updated');
    });

    it('deletes a salle successfully', async () => {
        const res = await request(app).delete(`/salles/${salleId}`);
        expect(res.statusCode).toBe(204);
    });

    afterAll(async () => {
        await sequelize.close();
    });
});
