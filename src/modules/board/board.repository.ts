import { BoardEntity } from '@project/api/database';
import { EntityRepository, Repository } from 'typeorm';

import { CustomRepository } from '~/db/typeorm-ex.decorator';

@CustomRepository(BoardEntity)
export class BoardRepository extends Repository<BoardEntity> {}
