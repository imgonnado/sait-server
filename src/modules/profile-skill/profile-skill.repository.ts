import { ProfileSkillEntity } from '@project/api/database';
//import { BaseRepository } from '@project/api/database';
import { EntityRepository, Repository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@CustomRepository(ProfileSkillEntity)
export class ProfileSkillRepository extends Repository<ProfileSkillEntity> {}
