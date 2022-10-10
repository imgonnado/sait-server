import { Injectable } from '@nestjs/common';
import { ProjectKeywordRepository } from '../repo/project-keyword.repository';

@Injectable()
export class ProjectKeywordService {
  constructor(private projectKeywordRepository: ProjectKeywordRepository) {}
}
