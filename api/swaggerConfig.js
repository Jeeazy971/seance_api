"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Gestion de Cinéma',
            version: '1.0.0',
            description: 'Une API pour gérer les salles, les séances et les tarifs de cinéma',
        },
    },
    apis: ['./apiDocs/*.ts'],
};
const openapiSpecification = (0, swagger_jsdoc_1.default)(options);
exports.default = openapiSpecification;
