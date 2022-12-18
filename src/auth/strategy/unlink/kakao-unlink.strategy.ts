import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import { ApplicationConfigInterface } from '~/types/services/application.config.interface';

export class KakaoUnlinkStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor(private readonly configService: ConfigService<ApplicationConfigInterface>) {
    super({
      clientID: configService.get('EXTERNAL_AUTH')['KAKAO']['CLIENT_ID'],
      callbackURL: configService.get('EXTERNAL_AUTH')['KAKAO']['CALLBACK_URL'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done) {
    const profileJson = profile._json;
    const user = {
      uid: profileJson.id,
      accessToken,
    };
    done(null, user);
  }
}
