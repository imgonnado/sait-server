import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export const AUTH_UNLINK_GUARD_TYPE = 'kakao-unlink';
@Injectable()
export class KakaoUnlinkGuard extends AuthGuard(AUTH_UNLINK_GUARD_TYPE) {
  constructor() {
    super();
  }
}
