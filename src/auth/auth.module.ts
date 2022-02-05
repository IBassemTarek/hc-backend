import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport'; 
import { AuthService } from './auth.service'; 
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants'; 
import { JwtStrategy } from './jwt.strategy'; 
import { UserModule } from '../user/user.module';
@Module({
  providers: [AuthService ,  JwtStrategy], 
  imports:[  PassportModule , UserModule,  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions:{expiresIn:'3600s'}
  })],
  exports:[AuthService]
})
export class AuthModule {}
