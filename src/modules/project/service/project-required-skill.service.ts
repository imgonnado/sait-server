import { Injectable } from '@nestjs/common';
import { ProjectRequiredSkillRepository } from '../repo/project-required-skill.repository';

@Injectable()
export class ProjectRequiredSkillService {
  constructor(private projectRequiredSkillRepository: ProjectRequiredSkillRepository) {}
}
