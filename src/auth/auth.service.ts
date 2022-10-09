import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '~/modules/user/user.service';
import { UserKakaoDto } from './dto/user.kakao.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  private tempUserJwtService: JwtService;
  async kakaoLogin(user: UserKakaoDto): Promise<{ accessToken: string }> {
    return { accessToken: 'test' };
  }
}
