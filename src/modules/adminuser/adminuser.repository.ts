import { AdminuserEntity } from '@project/api/database';
//import { BaseRepository } from '@project/api/database';
import { EntityRepository, Repository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@EntityRepository(AdminuserEntity)
export class AdminuserRepository extends Repository<AdminuserEntity> {}
