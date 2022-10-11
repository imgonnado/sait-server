import { BoardEntity } from '@project/api/database';
import { EntityRepository, Repository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@EntityRepository(BoardEntity)
export class BoardRepository extends Repository<BoardEntity> {}
