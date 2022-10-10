import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  FieldsProjectRequiredMemberCreate,
  FieldsProjectRequiredMemberUpdate,
  ICreatedOnlyBase,
  IProjectRequiredMemberBase,
} from '@project/shared/interfaces';
import { ProjectRequiredMemberDTO } from './project-required-member.dto';

@InputType({ isAbstract: true })
class MutationProjectRequiredMemberBase
  extends ProjectRequiredMemberDTO
  implements IProjectRequiredMemberBase, ICreatedOnlyBase {}

@InputType()
export class CreateProjectRequiredMemberInput extends PickType(
  MutationProjectRequiredMemberBase,
  FieldsProjectRequiredMemberCreate,
  InputType,
) {}

@InputType()
export class UpdateProjectRequiredMemberInput extends PickType(
  MutationProjectRequiredMemberBase,
  FieldsProjectRequiredMemberUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneProjectRequiredMemberInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectRequiredMemberInput)
  update: UpdateProjectRequiredMemberInput;
}

@InputType()
export class CreateOneProjectRequiredMemberInput {
  @Field(() => CreateProjectRequiredMemberInput)
  projectRequiredMember: CreateProjectRequiredMemberInput;
}
