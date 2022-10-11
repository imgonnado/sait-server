import { JobCategoryEntity } from '@project/api/database';
//import { BaseRepository } from '@project/api/database';
import { EntityRepository, Repository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@EntityRepository(JobCategoryEntity)
export class JobCategoryRepository extends Repository<JobCategoryEntity> {}
