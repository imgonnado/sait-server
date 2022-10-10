import { ProjectResearchAnswerEntity } from '@project/api/database';
import { BaseRepository } from '@project/api/database';
import { EntityRepository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@CustomRepository(ProjectResearchAnswerEntity)
export class ProjectResearchAnswerRepository extends BaseRepository<ProjectResearchAnswerEntity> {}
