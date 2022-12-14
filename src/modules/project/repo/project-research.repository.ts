import { ProjectResearchEntity } from '@project/api/database';
import { BaseRepository } from '@project/api/database';
import { EntityRepository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@EntityRepository(ProjectResearchEntity)
export class ProjectResearchRepository extends BaseRepository<ProjectResearchEntity> {}
