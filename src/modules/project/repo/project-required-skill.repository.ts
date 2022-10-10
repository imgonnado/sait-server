import { ProjectRequiredSkillEntity } from '@project/api/database';
import { BaseRepository } from '@project/api/database';
import { EntityRepository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@CustomRepository(ProjectRequiredSkillEntity)
export class ProjectRequiredSkillRepository extends BaseRepository<ProjectRequiredSkillEntity> {}
