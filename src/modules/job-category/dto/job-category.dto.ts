import { GraphQLJSON } from 'graphql-type-json';
import { IDField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { IJobCategoryBase } from '@project/shared/interfaces';
import {} from '@project/shared/enum';
import { CreatedOnlyBase, UpdateableBase, DeletableBase } from '../../common/dto/base.dto';

import { JobDTO } from '~/modules/job/dto/job.dto';

@InputType('JobCategoryInput')
@ObjectType('JobCategory')
@UnPagedRelation('jobs', () => JobDTO)
export class JobCategoryDTO extends CreatedOnlyBase implements IJobCategoryBase {
  @Field()
  categoryName: string;

  @Field({ nullable: true })
  parentId: string | null;

  @Field({ nullable: true, defaultValue: '0' })
  priority: number | null;
}
