import { AutoMap } from '@automapper/classes';
import { IUpdateable, IUpdateableBase } from '@project/shared/interfaces';
import { Type } from 'class-transformer/types/decorators';
import { UpdateDateColumn } from 'typeorm';
import { CreatedOnlyBaseEntity, CreatedOnlyEntity } from './createdOnly.entity';

export abstract class UpdateableEntity extends CreatedOnlyEntity implements IUpdateable {
  @AutoMap()
  @Type(() => Date)
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt!: Date;
}

export abstract class UpdateableBaseEntity extends CreatedOnlyBaseEntity implements IUpdateableBase {
  @AutoMap()
  @Type(() => Date)
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt!: Date;
}
