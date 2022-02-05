import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig:TypeOrmModuleOptions = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "root",
    "password": "root",
    "database": "test_db",
    "synchronize": true,
    "entities": [ 'dist/**/*.entity.js'],
    "migrations": [
       "dist/src/db/migrations/*.ts"
    ]
}; 