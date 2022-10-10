import { Injectable } from '@nestjs/common';
import { JobSkillRepository } from './job-skill.repository';

@Injectable()
export class JobSkillService {
  constructor(private jobSkillRepository: JobSkillRepository) {}
}
