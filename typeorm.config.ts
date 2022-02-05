import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "./src/user/entities/user.entities";

export const typeOrmConfig:TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "test_db",
    synchronize: true,
    entities: [User],
    
}; 