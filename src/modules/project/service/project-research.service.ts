import { Injectable } from '@nestjs/common';
import { ProjectResearchRepository } from '../repo/project-research.repository';

@Injectable()
export class ProjectResearchService {
  constructor(private projectResearchRepository: ProjectResearchRepository) {}
}
