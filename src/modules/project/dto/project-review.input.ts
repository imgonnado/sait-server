import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  FieldsProjectReviewCreate,
  FieldsProjectReviewUpdate,
  ICreatedOnlyBase,
  IProjectReviewBase,
} from '@project/shared/interfaces';
import { ProjectReviewDTO } from './project-review.dto';

@InputType({ isAbstract: true })
class MutationProjectReviewBase extends ProjectReviewDTO implements IProjectReviewBase, ICreatedOnlyBase {}

@InputType()
export class CreateProjectReviewInput extends PickType(
  MutationProjectReviewBase,
  FieldsProjectReviewCreate,
  InputType,
) {}

@InputType()
export class UpdateProjectReviewInput extends PickType(
  MutationProjectReviewBase,
  FieldsProjectReviewUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneProjectReviewInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectReviewInput)
  update: UpdateProjectReviewInput;
}

@InputType()
export class CreateOneProjectReviewInput {
  @Field(() => CreateProjectReviewInput)
  projectReview: CreateProjectReviewInput;
}
