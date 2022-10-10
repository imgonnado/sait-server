import { GraphQLJSON } from 'graphql-type-json';
import { IDField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { INoticeBase } from '@project/shared/interfaces';
import { BoardCategoryType } from '@project/shared/enum';
import { CreatedOnlyBase, UpdateableBase, DeletableBase } from '../../common/dto/base.dto';

@InputType('NoticeInput')
@ObjectType('Notice')
export class NoticeDTO extends CreatedOnlyBase implements INoticeBase {
  @Field(() => BoardCategoryType, { nullable: true, defaultValue: BoardCategoryType.notice })
  category: BoardCategoryType;

  @Field({ nullable: true })
  subject: string | null;

  @Field({ nullable: true })
  content: string | null;

  @Field()
  adminuserId: string;
}
