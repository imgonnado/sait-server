import { GraphQLJSON } from 'graphql-type-json';
import { IDField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { IUserInterestKeywordBase } from '@project/shared/interfaces';
import {} from '@project/shared/enum';
import { CreatedOnlyBase, UpdateableBase, DeletableBase } from '../../common/dto/base.dto';

@InputType('UserInterestKeywordInput')
@ObjectType('UserInterestKeyword')
export class UserInterestKeywordDTO extends CreatedOnlyBase implements IUserInterestKeywordBase {
  @Field()
  userId: string;

  @Field()
  keyword: string;
}
