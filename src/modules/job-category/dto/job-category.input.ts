import { IJobCategoryBase } from '@project/shared/interfaces';
import {
  FieldsJobCategoryCreate,
  FieldsJobCategoryUpdate,
  ICreatedOnlyBase,
  IUpdateableBase,
  IDeletableBase,
} from '@project/shared/interfaces';
import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';
import { JobCategoryDTO } from './job-category.dto';

import { CreateJobInput } from '~/modules/job/dto/job.input';

@InputType({ isAbstract: true })
class MutationJobCategoryBase extends JobCategoryDTO implements IJobCategoryBase, ICreatedOnlyBase {
  @Field(() => [CreateJobInput], { nullable: false })
  jobs: CreateJobInput[];
}

@InputType()
export class CreateJobCategoryInput extends PickType(MutationJobCategoryBase, FieldsJobCategoryCreate, InputType) {}

@InputType()
export class UpdateJobCategoryInput extends PickType(MutationJobCategoryBase, FieldsJobCategoryUpdate, InputType) {}

@InputType()
export class UpdateOneJobCategoryInput {
  @Field()
  id: string;

  @Field(() => UpdateJobCategoryInput)
  update: UpdateJobCategoryInput;
}

@InputType()
export class CreateOneJobCategoryInput {
  @Field(() => CreateJobCategoryInput)
  jobCategory: CreateJobCategoryInput;
}
