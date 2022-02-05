import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module'; 
import { typeOrmConfig } from '../typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      typeOrmConfig
    ),
    UserModule,
    AuthModule,   
  ],
})
export class AppModule {}
