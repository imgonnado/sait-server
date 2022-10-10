import { Injectable } from '@nestjs/common';
import { ProfileSkillRepository } from './profile-skill.repository';

@Injectable()
export class ProfileSkillService {
  constructor(private profileSkillRepository: ProfileSkillRepository) {}
}
