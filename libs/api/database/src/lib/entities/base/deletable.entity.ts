import { AutoMap } from '@automapper/classes';
import { IDeletable, IDeletableBase } from '@project/shared/interfaces';
import { Type } from 'class-transformer/types/decorators';
import { DeleteDateColumn } from 'typeorm';
import { UpdateableBaseEntity, UpdateableEntity } from './updateable.entity';

export abstract class DeletableEntity extends UpdateableEntity implements IDeletable {
  @AutoMap()
  @Type(() => Date)
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: false,
    comment: 'Soft 삭제 일자',
  })
  deletedAt!: Date;
}

export abstract class DeletableBaseEntity extends UpdateableBaseEntity implements IDeletableBase {
  @AutoMap()
  @Type(() => Date)
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: false,
    comment: 'Soft 삭제 일자',
  })
  deletedAt!: Date;
}
