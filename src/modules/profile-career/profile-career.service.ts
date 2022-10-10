import { Injectable } from '@nestjs/common';
import { ProfileCareerRepository } from './profile-career.repository';

@Injectable()
export class ProfileCareerService {
  constructor(private profileCareerRepository: ProfileCareerRepository) {}
}
