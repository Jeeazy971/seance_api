import type { Config } from '@jest/types';

// Configuration Jest pour les projets TypeScript
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'], // Répertoire de mes tests
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], // Patterns des fichiers de test
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
};

export default config;
