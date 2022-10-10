import { GraphQLJSON } from 'graphql-type-json';
import { IDField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { IJobSkillBase } from '@project/shared/interfaces';
import {} from '@project/shared/enum';
import { CreatedOnlyBase, UpdateableBase, DeletableBase } from '../../common/dto/base.dto';

@InputType('JobSkillInput')
@ObjectType('JobSkill')
export class JobSkillDTO extends CreatedOnlyBase implements IJobSkillBase {
  @Field({ nullable: true })
  jobId: string | null;

  @Field({ nullable: true })
  skillName: string | null;

  @Field({ nullable: true })
  description: string | null;

  @Field({ nullable: true })
  image: string | null;
}
