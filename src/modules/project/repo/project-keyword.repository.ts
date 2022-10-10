import { ProjectKeywordEntity } from '@project/api/database';
import { BaseRepository } from '@project/api/database';
import { EntityRepository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@CustomRepository(ProjectKeywordEntity)
export class ProjectKeywordRepository extends BaseRepository<ProjectKeywordEntity> {}
