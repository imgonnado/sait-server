import { GraphQLJSON } from 'graphql-type-json';
import { IDField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { IProfileCareerBase } from '@project/shared/interfaces';
import {} from '@project/shared/enum';
import { CreatedOnlyBase, UpdateableBase, DeletableBase } from '../../common/dto/base.dto';

@InputType('ProfileCareerInput')
@ObjectType('ProfileCareer')
export class ProfileCareerDTO extends CreatedOnlyBase implements IProfileCareerBase {
  @Field()
  profileId: string;

  @Field()
  title: string;

  @Field({ nullable: true, defaultValue: '1' })
  careerMonths: number | null;

  @Field({ nullable: true })
  description: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  urls: JSON;
}
