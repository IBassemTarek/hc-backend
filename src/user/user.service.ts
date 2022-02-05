import {  Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { User } from './entities/user.entities';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
    constructor(@InjectRepository(UserRepository) private userRepo: UserRepository) {}
    async findOne( username:string):Promise<User | undefined>{
      try{
        const user =  await this.userRepo.findOne({
          where:[
            {
              username:username
            }
          ]
        })
        return user; 
    }  
      catch (e){
        throw UnauthorizedException;  
      }
    } 

    
}
