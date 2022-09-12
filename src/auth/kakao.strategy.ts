import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import * as config from 'config';
import { UserKakaoDto } from './dto/user.kakao.dto';

const kakaoConfig = config.get('kakao');

export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: kakaoConfig.clientID,
      clientSecret: kakaoConfig.clientSecret,
      callbackURL: kakaoConfig.callbackURL,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done,
  ) {
    const { id, username, displayName } = profile;
    const user = new UserKakaoDto();
    user.id = id;
    user.username = username;
    user.displayName = displayName;
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    done(null, user);
  }
}
