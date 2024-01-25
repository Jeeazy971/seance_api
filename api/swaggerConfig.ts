import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestion de Cinéma',
      version: '1.0.0',
      description: 'Une API pour gérer les salles, les séances et les tarifs de cinéma',
    },
  },
//   apis: ['.src/routes/*.ts'],
  apis: ['./apiDocs/*.ts'],
};

const openapiSpecification = swaggerJsdoc(options);

export default openapiSpecification;
