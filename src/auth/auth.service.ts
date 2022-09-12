import { UserKakaoDto } from './dto/user.kakao.dto';

export class AuthService {
  async kakaoLogin(user: UserKakaoDto): Promise<{ accessToken: string }> {
    return { accessToken: 'test' };
  }
}
