import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  FieldsProjectResearchAnswerCreate,
  FieldsProjectResearchAnswerUpdate,
  ICreatedOnlyBase,
  IProjectResearchAnswerBase,
} from '@project/shared/interfaces';
import { ProjectResearchAnswerDTO } from './project-research-answer.dto';

@InputType({ isAbstract: true })
class MutationProjectResearchAnswerBase
  extends ProjectResearchAnswerDTO
  implements IProjectResearchAnswerBase, ICreatedOnlyBase {}

@InputType()
export class CreateProjectResearchAnswerInput extends PickType(
  MutationProjectResearchAnswerBase,
  FieldsProjectResearchAnswerCreate,
  InputType,
) {}

@InputType()
export class UpdateProjectResearchAnswerInput extends PickType(
  MutationProjectResearchAnswerBase,
  FieldsProjectResearchAnswerUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneProjectResearchAnswerInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectResearchAnswerInput)
  update: UpdateProjectResearchAnswerInput;
}

@InputType()
export class CreateOneProjectResearchAnswerInput {
  @Field(() => CreateProjectResearchAnswerInput)
  projectResearchAnswer: CreateProjectResearchAnswerInput;
}
