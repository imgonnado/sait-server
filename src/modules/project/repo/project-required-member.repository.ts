import { ProjectRequiredMemberEntity } from '@project/api/database';
import { BaseRepository } from '@project/api/database';
import { EntityRepository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@EntityRepository(ProjectRequiredMemberEntity)
export class ProjectRequiredMemberRepository extends BaseRepository<ProjectRequiredMemberEntity> {}
