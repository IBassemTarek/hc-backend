import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeOrmConfig:TypeOrmModuleOptions = {
    type: "postgres",
    database: "test_db",
    synchronize: true,
    entities: ['src/entity/*.ts', './build/src/entity/*.js'], 
    migrations: ["dist/src/db/migrations/*.js"],
    cli:{
        migrationsDir:'src/db/migrations'
    },
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root", 
}; 

export default typeOrmConfig;