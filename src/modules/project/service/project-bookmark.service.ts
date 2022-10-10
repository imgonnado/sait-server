import { Injectable } from '@nestjs/common';
import { ProjectBookmarkRepository } from '../repo/project-bookmark.repository';

@Injectable()
export class ProjectBookmarkService {
  constructor(private projectBookmarkRepository: ProjectBookmarkRepository) {}
}
