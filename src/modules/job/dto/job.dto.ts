import { GraphQLJSON } from 'graphql-type-json';
import { IDField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { IJobBase } from '@project/shared/interfaces';
import {} from '@project/shared/enum';
import { CreatedOnlyBase, UpdateableBase, DeletableBase } from '../../common/dto/base.dto';

import { JobSkillDTO } from '~/modules/job-skill/dto/job-skill.dto';

@InputType('JobInput')
@ObjectType('Job')
@UnPagedRelation('jobSkills', () => JobSkillDTO)
export class JobDTO extends CreatedOnlyBase implements IJobBase {
  @Field()
  jobTitle: string;

  @Field({ nullable: true })
  jobCategoryId: string | null;

  @Field({ nullable: true })
  jobCode: string | null;
}
