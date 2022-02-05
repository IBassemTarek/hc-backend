import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userServices:UserService , private jwtService:JwtService){}

    async login (user:any){
        const payload = {name:user.name , sub:user.id}
        return {
            access_token:this.jwtService.sign(payload)
        }
    }
    async validateUser(username:string, password:string):Promise<any>{
        const user = await this.userServices.findOne(username)
        if (user && user.password === password) {
            const {username , password , ...userData} = user;
            return userData;
        }
        else return null;
    }
}
