import { Injectable } from '@nestjs/common';
import { JobCategoryRepository } from './job-category.repository';

@Injectable()
export class JobCategoryService {
  constructor(private jobCategoryRepository: JobCategoryRepository) {}
}
