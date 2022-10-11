import { ProfileCareerEntity } from '@project/api/database';
//import { BaseRepository } from '@project/api/database';
import { EntityRepository, Repository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@EntityRepository(ProfileCareerEntity)
export class ProfileCareerRepository extends Repository<ProfileCareerEntity> {}
