import { Field, InputType, PickType } from '@nestjs/graphql';
import { FieldsProfileCreate, FieldsProfileUpdate, ICreatedOnlyBase, IProfileBase } from '@project/shared/interfaces';
import { ProfileDTO } from './profile.dto';

import { CreateProfileCareerInput } from '~/modules/profile-career/dto/profile-career.input';
import { CreateProfileSkillInput } from '~/modules/profile-skill/dto/profile-skill.input';
import { CreateProjectMemberInput } from '~/modules/project/dto/project-member.input';

@InputType({ isAbstract: true })
class MutationProfileBase extends ProfileDTO implements IProfileBase, ICreatedOnlyBase {
  @Field(() => [CreateProfileCareerInput], { nullable: false })
  profileCareers: CreateProfileCareerInput[];

  @Field(() => [CreateProfileSkillInput], { nullable: false })
  profileSkills: CreateProfileSkillInput[];

  @Field(() => [CreateProjectMemberInput], { nullable: false })
  projectMembers: CreateProjectMemberInput[];
}

@InputType()
export class CreateProfileInput extends PickType(MutationProfileBase, FieldsProfileCreate, InputType) {}

@InputType()
export class UpdateProfileInput extends PickType(MutationProfileBase, FieldsProfileUpdate, InputType) {}

@InputType()
export class UpdateOneProfileInput {
  @Field()
  id: string;

  @Field(() => UpdateProfileInput)
  update: UpdateProfileInput;
}

@InputType()
export class CreateOneProfileInput {
  @Field(() => CreateProfileInput)
  profile: CreateProfileInput;
}
