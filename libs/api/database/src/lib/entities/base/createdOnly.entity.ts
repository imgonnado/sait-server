import { ICreatedOnly, ICreatedOnlyBase } from '@project/shared/interfaces';
import { Type } from 'class-transformer';
import { BaseEntity, CreateDateColumn } from 'typeorm';
import { CommonBaseEntity } from './base.entity';

export abstract class CreatedOnlyBaseEntity extends CommonBaseEntity implements ICreatedOnlyBase {
  @Type(() => Date)
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
  })
  createdAt!: Date;
}

export abstract class CreatedOnlyEntity extends BaseEntity implements ICreatedOnly {
  @Type(() => Date)
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
  })
  createdAt!: Date;
}
