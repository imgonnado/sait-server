import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../repo/project.repository';

@Injectable()
export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}
}
