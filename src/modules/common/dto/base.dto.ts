import {
  IBase,
  ICreatedOnly,
  ICreatedOnlyBase,
  IDeletable,
  IDeletableBase,
  IUpdateable,
  IUpdateableBase,
} from '@project/shared/interfaces';
import { IDField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Base', { isAbstract: true })
export abstract class Base implements IBase {
  @IDField(() => ID, { nullable: true })
  id: string;
}

@ObjectType('CreatedOnly', { isAbstract: true })
export abstract class CreatedOnly implements ICreatedOnly {
  @Field(() => GraphQLISODateTime)
  createdAt?: Date;
}

@ObjectType('CreatedOnlyBase', { isAbstract: true })
export abstract class CreatedOnlyBase extends Base implements ICreatedOnlyBase {
  @Field(() => GraphQLISODateTime)
  createdAt?: Date;
}

/**
 * 수정 Interface
 */
@ObjectType('Updateable', { isAbstract: true })
export abstract class Updateable extends CreatedOnly implements IUpdateable {
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}

/**
 * 수정 Base Interface
 */
@ObjectType('UpdateableBase')
export abstract class UpdateableBase extends CreatedOnlyBase implements IUpdateableBase {
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}

/**
 * 삭제 Interface
 */
@ObjectType('Deletable', { isAbstract: true })
export abstract class Deletable extends Updateable implements IDeletable {
  @Field(() => GraphQLISODateTime, { nullable: true })
  deletedAt: Date;
}

/**
 * 삭제 Base Interface
 */
@ObjectType('DeletableBase', { isAbstract: true })
export abstract class DeletableBase extends UpdateableBase implements IDeletableBase {
  @Field(() => GraphQLISODateTime, { nullable: true })
  deletedAt?: Date;
}
