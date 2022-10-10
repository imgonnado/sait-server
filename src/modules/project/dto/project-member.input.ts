import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  FieldsProjectMemberCreate,
  FieldsProjectMemberUpdate,
  ICreatedOnlyBase,
  IProjectMemberBase,
} from '@project/shared/interfaces';
import { ProjectMemberDTO } from './project-member.dto';

@InputType({ isAbstract: true })
class MutationProjectMemberBase extends ProjectMemberDTO implements IProjectMemberBase, ICreatedOnlyBase {}

@InputType()
export class CreateProjectMemberInput extends PickType(
  MutationProjectMemberBase,
  FieldsProjectMemberCreate,
  InputType,
) {}

@InputType()
export class UpdateProjectMemberInput extends PickType(
  MutationProjectMemberBase,
  FieldsProjectMemberUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneProjectMemberInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectMemberInput)
  update: UpdateProjectMemberInput;
}

@InputType()
export class CreateOneProjectMemberInput {
  @Field(() => CreateProjectMemberInput)
  projectMember: CreateProjectMemberInput;
}
