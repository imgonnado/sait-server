import { Injectable } from '@nestjs/common';
import { ProjectRequiredMemberRepository } from '../repo/project-required-member.repository';

@Injectable()
export class ProjectRequiredMemberService {
  constructor(private projectRequiredMemberRepository: ProjectRequiredMemberRepository) {}
}
