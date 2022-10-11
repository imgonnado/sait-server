import { ProjectBookmarkEntity } from '@project/api/database';
import { BaseRepository } from '@project/api/database';
import { EntityRepository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@EntityRepository(ProjectBookmarkEntity)
export class ProjectBookmarkRepository extends BaseRepository<ProjectBookmarkEntity> {}
