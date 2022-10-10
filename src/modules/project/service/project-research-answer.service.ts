import { Injectable } from '@nestjs/common';
import { ProjectResearchAnswerRepository } from '../repo/project-research-answer.repository';

@Injectable()
export class ProjectResearchAnswerService {
  constructor(private projectResearchAnswerRepository: ProjectResearchAnswerRepository) {}
}
