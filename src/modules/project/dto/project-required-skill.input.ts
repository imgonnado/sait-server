import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  FieldsProjectRequiredSkillCreate,
  FieldsProjectRequiredSkillUpdate,
  ICreatedOnlyBase,
  IProjectRequiredSkillBase,
} from '@project/shared/interfaces';
import { ProjectRequiredSkillDTO } from './project-required-skill.dto';

@InputType({ isAbstract: true })
class MutationProjectRequiredSkillBase
  extends ProjectRequiredSkillDTO
  implements IProjectRequiredSkillBase, ICreatedOnlyBase {}

@InputType()
export class CreateProjectRequiredSkillInput extends PickType(
  MutationProjectRequiredSkillBase,
  FieldsProjectRequiredSkillCreate,
  InputType,
) {}

@InputType()
export class UpdateProjectRequiredSkillInput extends PickType(
  MutationProjectRequiredSkillBase,
  FieldsProjectRequiredSkillUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneProjectRequiredSkillInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectRequiredSkillInput)
  update: UpdateProjectRequiredSkillInput;
}

@InputType()
export class CreateOneProjectRequiredSkillInput {
  @Field(() => CreateProjectRequiredSkillInput)
  projectRequiredSkill: CreateProjectRequiredSkillInput;
}
