import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  FieldsProjectMemberOutCreate,
  FieldsProjectMemberOutUpdate,
  ICreatedOnlyBase,
  IProjectMemberOutBase,
} from '@project/shared/interfaces';
import { ProjectMemberOutDTO } from './project-member-out.dto';

@InputType({ isAbstract: true })
class MutationProjectMemberOutBase extends ProjectMemberOutDTO implements IProjectMemberOutBase, ICreatedOnlyBase {}

@InputType()
export class CreateProjectMemberOutInput extends PickType(
  MutationProjectMemberOutBase,
  FieldsProjectMemberOutCreate,
  InputType,
) {}

@InputType()
export class UpdateProjectMemberOutInput extends PickType(
  MutationProjectMemberOutBase,
  FieldsProjectMemberOutUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneProjectMemberOutInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectMemberOutInput)
  update: UpdateProjectMemberOutInput;
}

@InputType()
export class CreateOneProjectMemberOutInput {
  @Field(() => CreateProjectMemberOutInput)
  projectMemberOut: CreateProjectMemberOutInput;
}
