import { IJobSkillBase } from '@project/shared/interfaces';
import {
  FieldsJobSkillCreate,
  FieldsJobSkillUpdate,
  ICreatedOnlyBase,
  IUpdateableBase,
  IDeletableBase,
} from '@project/shared/interfaces';
import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';
import { JobSkillDTO } from './job-skill.dto';

@InputType({ isAbstract: true })
class MutationJobSkillBase extends JobSkillDTO implements IJobSkillBase, ICreatedOnlyBase {}

@InputType()
export class CreateJobSkillInput extends PickType(MutationJobSkillBase, FieldsJobSkillCreate, InputType) {}

@InputType()
export class UpdateJobSkillInput extends PickType(MutationJobSkillBase, FieldsJobSkillUpdate, InputType) {}

@InputType()
export class UpdateOneJobSkillInput {
  @Field()
  id: string;

  @Field(() => UpdateJobSkillInput)
  update: UpdateJobSkillInput;
}

@InputType()
export class CreateOneJobSkillInput {
  @Field(() => CreateJobSkillInput)
  jobSkill: CreateJobSkillInput;
}
