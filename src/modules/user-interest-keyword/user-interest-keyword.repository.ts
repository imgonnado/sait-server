import { UserInterestKeywordEntity } from '@project/api/database';
//import { BaseRepository } from '@project/api/database';
import { EntityRepository, Repository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@EntityRepository(UserInterestKeywordEntity)
export class UserInterestKeywordRepository extends Repository<UserInterestKeywordEntity> {}
