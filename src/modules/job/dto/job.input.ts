import { IJobBase } from '@project/shared/interfaces';
import {
  FieldsJobCreate,
  FieldsJobUpdate,
  ICreatedOnlyBase,
  IUpdateableBase,
  IDeletableBase,
} from '@project/shared/interfaces';
import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';
import { JobDTO } from './job.dto';

import { CreateJobSkillInput } from '~/modules/job-skill/dto/job-skill.input';

@InputType({ isAbstract: true })
class MutationJobBase extends JobDTO implements IJobBase, ICreatedOnlyBase {
  @Field(() => [CreateJobSkillInput], { nullable: false })
  jobSkills: CreateJobSkillInput[];
}

@InputType()
export class CreateJobInput extends PickType(MutationJobBase, FieldsJobCreate, InputType) {}

@InputType()
export class UpdateJobInput extends PickType(MutationJobBase, FieldsJobUpdate, InputType) {}

@InputType()
export class UpdateOneJobInput {
  @Field()
  id: string;

  @Field(() => UpdateJobInput)
  update: UpdateJobInput;
}

@InputType()
export class CreateOneJobInput {
  @Field(() => CreateJobInput)
  job: CreateJobInput;
}
