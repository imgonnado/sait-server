import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserRepository } from '../modules/user/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';
import { KakaoStrategy } from './kakao.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { KakaoUnlinkStrategy } from './strategy/unlink/kakao-unlink.strategy';
const jwtConfig = config.get('jwt');

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || jwtConfig.secret,
      signOptions: {
        expiresIn: jwtConfig.expiresIn,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, KakaoStrategy, KakaoUnlinkStrategy, JwtStrategy],
})
export class AuthModule {}
