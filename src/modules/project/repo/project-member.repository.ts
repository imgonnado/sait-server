import { ProjectMemberEntity } from '@project/api/database';
import { BaseRepository } from '@project/api/database';
import { EntityRepository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@EntityRepository(ProjectMemberEntity)
export class ProjectMemberRepository extends BaseRepository<ProjectMemberEntity> {}
