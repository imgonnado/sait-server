import { Injectable } from '@nestjs/common';
import { ProjectPermitRepository } from '../repo/project-permit.repository';

@Injectable()
export class ProjectPermitService {
  constructor(private projectPermitRepository: ProjectPermitRepository) {}
}
