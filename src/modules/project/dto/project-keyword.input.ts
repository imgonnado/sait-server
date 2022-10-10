import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  FieldsProjectKeywordCreate,
  FieldsProjectKeywordUpdate,
  ICreatedOnlyBase,
  IProjectKeywordBase,
} from '@project/shared/interfaces';
import { ProjectKeywordDTO } from './project-keyword.dto';

@InputType({ isAbstract: true })
class MutationProjectKeywordBase extends ProjectKeywordDTO implements IProjectKeywordBase, ICreatedOnlyBase {}

@InputType()
export class CreateProjectKeywordInput extends PickType(
  MutationProjectKeywordBase,
  FieldsProjectKeywordCreate,
  InputType,
) {}

@InputType()
export class UpdateProjectKeywordInput extends PickType(
  MutationProjectKeywordBase,
  FieldsProjectKeywordUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneProjectKeywordInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectKeywordInput)
  update: UpdateProjectKeywordInput;
}

@InputType()
export class CreateOneProjectKeywordInput {
  @Field(() => CreateProjectKeywordInput)
  projectKeyword: CreateProjectKeywordInput;
}
