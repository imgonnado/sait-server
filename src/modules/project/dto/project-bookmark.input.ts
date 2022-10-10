import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  FieldsProjectBookmarkCreate,
  FieldsProjectBookmarkUpdate,
  ICreatedOnlyBase,
  IProjectBookmarkBase,
} from '@project/shared/interfaces';
import { ProjectBookmarkDTO } from './project-bookmark.dto';

@InputType({ isAbstract: true })
class MutationProjectBookmarkBase extends ProjectBookmarkDTO implements IProjectBookmarkBase, ICreatedOnlyBase {}

@InputType()
export class CreateProjectBookmarkInput extends PickType(
  MutationProjectBookmarkBase,
  FieldsProjectBookmarkCreate,
  InputType,
) {}

@InputType()
export class UpdateProjectBookmarkInput extends PickType(
  MutationProjectBookmarkBase,
  FieldsProjectBookmarkUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneProjectBookmarkInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectBookmarkInput)
  update: UpdateProjectBookmarkInput;
}

@InputType()
export class CreateOneProjectBookmarkInput {
  @Field(() => CreateProjectBookmarkInput)
  projectBookmark: CreateProjectBookmarkInput;
}
