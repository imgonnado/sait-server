import { JobSkillEntity } from '@project/api/database';
//import { BaseRepository } from '@project/api/database';
import { EntityRepository, Repository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@CustomRepository(JobSkillEntity)
export class JobSkillRepository extends Repository<JobSkillEntity> {}
