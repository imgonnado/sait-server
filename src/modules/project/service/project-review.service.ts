import { Injectable } from '@nestjs/common';
import { ProjectReviewRepository } from '../repo/project-review.repository';

@Injectable()
export class ProjectReviewService {
  constructor(private projectReviewRepository: ProjectReviewRepository) {}
}
