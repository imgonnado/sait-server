import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserKakaoDto } from './dto/user.kakao.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('kakao')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('kakao'))
  async kakaoLogin() {
    // initiates the kakao OAuth2 login flow
    return HttpStatus.OK;
  }

  @Get('kakao/callback')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('kakao'))
  async kakaoLoginCallback(@Req() req): Promise<{ accessToken: string }> {
    // const user: UserKakaoDto = req.user;
    // const jwt: string = await this.authService.login(user);
    // return { jwt };
    return this.authService.kakaoLogin(req.user as UserKakaoDto);
  }
}
