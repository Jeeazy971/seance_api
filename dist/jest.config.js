"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Configuration Jest pour les projets TypeScript
const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'], // Répertoire de vos tests
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], // Patterns des fichiers de test
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
};
exports.default = config;
