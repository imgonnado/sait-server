import { GraphQLJSON } from 'graphql-type-json';
import { IDField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { IProfileSkillBase } from '@project/shared/interfaces';
import {} from '@project/shared/enum';
import { CreatedOnlyBase, UpdateableBase, DeletableBase } from '../../common/dto/base.dto';

@InputType('ProfileSkillInput')
@ObjectType('ProfileSkill')
export class ProfileSkillDTO extends CreatedOnlyBase implements IProfileSkillBase {
  @Field()
  profileId: string;

  @Field()
  jobSkillId: string;
}
