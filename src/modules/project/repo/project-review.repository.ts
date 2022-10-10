import { ProjectReviewEntity } from '@project/api/database';
import { BaseRepository } from '@project/api/database';
import { EntityRepository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@CustomRepository(ProjectReviewEntity)
export class ProjectReviewRepository extends BaseRepository<ProjectReviewEntity> {}
