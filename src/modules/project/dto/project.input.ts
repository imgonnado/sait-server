import { Field, InputType, PickType } from '@nestjs/graphql';
import { FieldsProjectCreate, FieldsProjectUpdate, ICreatedOnlyBase, IProjectBase } from '@project/shared/interfaces';
import { ProjectDTO } from './project.dto';

import { CreateProjectImageInput } from '~/modules/project/dto/project-image.input';
import { CreateProjectKeywordInput } from '~/modules/project/dto/project-keyword.input';
import { CreateProjectMemberOutInput } from '~/modules/project/dto/project-member-out.input';
import { CreateProjectMemberInput } from '~/modules/project/dto/project-member.input';
import { CreateProjectPermitInput } from '~/modules/project/dto/project-permit.input';
import { CreateProjectRequiredMemberInput } from '~/modules/project/dto/project-required-member.input';
import { CreateProjectRequiredSkillInput } from '~/modules/project/dto/project-required-skill.input';
import { CreateProjectResearchInput } from '~/modules/project/dto/project-research.input';
import { CreateProjectReviewInput } from '~/modules/project/dto/project-review.input';

@InputType({ isAbstract: true })
class MutationProjectBase extends ProjectDTO implements IProjectBase, ICreatedOnlyBase {
  @Field(() => [CreateProjectImageInput], { nullable: false })
  projectImages: CreateProjectImageInput[];

  @Field(() => [CreateProjectKeywordInput], { nullable: false })
  projectKeywords: CreateProjectKeywordInput[];

  @Field(() => [CreateProjectMemberInput], { nullable: false })
  projectMembers: CreateProjectMemberInput[];

  @Field(() => [CreateProjectMemberOutInput], { nullable: false })
  projectMemberOuts: CreateProjectMemberOutInput[];

  @Field(() => [CreateProjectPermitInput], { nullable: false })
  projectPermits: CreateProjectPermitInput[];

  @Field(() => [CreateProjectRequiredMemberInput], { nullable: false })
  projectRequiredMembers: CreateProjectRequiredMemberInput[];

  @Field(() => [CreateProjectRequiredSkillInput], { nullable: false })
  projectRequiredSkills: CreateProjectRequiredSkillInput[];

  @Field(() => [CreateProjectResearchInput], { nullable: false })
  projectResearchs: CreateProjectResearchInput[];

  @Field(() => [CreateProjectReviewInput], { nullable: false })
  projectReviews: CreateProjectReviewInput[];
}

@InputType()
export class CreateProjectInput extends PickType(MutationProjectBase, FieldsProjectCreate, InputType) {}

@InputType()
export class UpdateProjectInput extends PickType(MutationProjectBase, FieldsProjectUpdate, InputType) {}

@InputType()
export class UpdateOneProjectInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectInput)
  update: UpdateProjectInput;
}

@InputType()
export class CreateOneProjectInput {
  @Field(() => CreateProjectInput)
  project: CreateProjectInput;
}
