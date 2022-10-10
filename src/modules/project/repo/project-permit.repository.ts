import { ProjectPermitEntity } from '@project/api/database';
import { BaseRepository } from '@project/api/database';
import { EntityRepository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@CustomRepository(ProjectPermitEntity)
export class ProjectPermitRepository extends BaseRepository<ProjectPermitEntity> {}
