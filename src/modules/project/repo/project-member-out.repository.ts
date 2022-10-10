import { ProjectMemberOutEntity } from '@project/api/database';
import { BaseRepository } from '@project/api/database';
import { EntityRepository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@CustomRepository(ProjectMemberOutEntity)
export class ProjectMemberOutRepository extends BaseRepository<ProjectMemberOutEntity> {}
