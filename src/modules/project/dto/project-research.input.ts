import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  FieldsProjectResearchCreate,
  FieldsProjectResearchUpdate,
  ICreatedOnlyBase,
  IProjectResearchBase,
} from '@project/shared/interfaces';
import { ProjectResearchDTO } from './project-research.dto';

import { CreateProjectResearchAnswerInput } from '~/modules/project/dto/project-research-answer.input';

@InputType({ isAbstract: true })
class MutationProjectResearchBase extends ProjectResearchDTO implements IProjectResearchBase, ICreatedOnlyBase {
  @Field(() => [CreateProjectResearchAnswerInput], { nullable: false })
  projectResearchAnswers: CreateProjectResearchAnswerInput[];
}

@InputType()
export class CreateProjectResearchInput extends PickType(
  MutationProjectResearchBase,
  FieldsProjectResearchCreate,
  InputType,
) {}

@InputType()
export class UpdateProjectResearchInput extends PickType(
  MutationProjectResearchBase,
  FieldsProjectResearchUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneProjectResearchInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectResearchInput)
  update: UpdateProjectResearchInput;
}

@InputType()
export class CreateOneProjectResearchInput {
  @Field(() => CreateProjectResearchInput)
  projectResearch: CreateProjectResearchInput;
}
