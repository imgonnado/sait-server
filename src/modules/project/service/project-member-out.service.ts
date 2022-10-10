import { Injectable } from '@nestjs/common';
import { ProjectMemberOutRepository } from '../repo/project-member-out.repository';

@Injectable()
export class ProjectMemberOutService {
  constructor(private projectMemberOutRepository: ProjectMemberOutRepository) {}
}
