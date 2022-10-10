import { Injectable } from '@nestjs/common';
import { ProjectImageRepository } from '../repo/project-image.repository';

@Injectable()
export class ProjectImageService {
  constructor(private projectImageRepository: ProjectImageRepository) {}
}
