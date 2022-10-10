import { Injectable } from '@nestjs/common';
import { ProjectMemberRepository } from '../repo/project-member.repository';

@Injectable()
export class ProjectMemberService {
  constructor(private projectMemberRepository: ProjectMemberRepository) {}
}
