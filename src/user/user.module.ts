import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { User } from './entities/user.entities';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository ,User])],
  controllers: [UserController],
  providers: [UserService], 
  exports:[UserService , TypeOrmModule.forFeature([UserRepository])]
})
export class UserModule {}
