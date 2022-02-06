import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module'; 
import  typeOrmConfig  from '../typeorm.config';
import { getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await 
         getConnectionOptions(), {
          autoLoadEntities: true,
        }),
      }),
    TypeOrmModule.forRoot(
      typeOrmConfig
    ), 
    UserModule,
    AuthModule,   
  ],
})
export class AppModule {}
