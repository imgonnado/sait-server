import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import { ConfigService } from '@nestjs/config';
import { UserKakaoDto } from './dto/user.kakao.dto';
import { UserDTO } from '~/modules/user/dto/user.dto';
import { ApplicationConfigInterface } from '~/types/services/application.config.interface';

export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor(private readonly configService: ConfigService<ApplicationConfigInterface>) {
    super({
      clientID: configService.get('EXTERNAL_AUTH')['KAKAO']['CLIENT_ID'],
      callbackURL: configService.get('EXTERNAL_AUTH')['KAKAO']['CALLBACK_URL'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done) {
    const profileJson = profile._json;
    const kakaoAccount = profileJson.kakao_account;
    const user: UserKakaoDto = {
      uid: profileJson.id,
      email: kakaoAccount.email,
      name: profileJson?.properties?.nickname ?? '',
      pictureUrl: kakaoAccount?.profile?.profile_image_url ?? '',
    };
    done(null, user);
  }
}
