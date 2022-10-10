import { Field, InputType, PickType } from '@nestjs/graphql';
import { FieldsUserCreate, FieldsUserUpdate, ICreatedOnlyBase, IUserBase } from '@project/shared/interfaces';
import { UserDTO } from './user.dto';

import { CreateProfileInput } from '~/modules/profile/dto/profile.input';
import { CreateProjectBookmarkInput } from '~/modules/project/dto/project-bookmark.input';
import { CreateProjectMemberOutInput } from '~/modules/project/dto/project-member-out.input';
import { CreateProjectMemberInput } from '~/modules/project/dto/project-member.input';
import { CreateProjectReviewInput } from '~/modules/project/dto/project-review.input';
import { CreateUserInterestKeywordInput } from '~/modules/user-interest-keyword/dto/user-interest-keyword.input';

@InputType({ isAbstract: true })
class MutationUserBase extends UserDTO implements IUserBase, ICreatedOnlyBase {
  @Field(() => [CreateProfileInput], { nullable: false })
  profiles: CreateProfileInput[];

  @Field(() => [CreateProjectBookmarkInput], { nullable: false })
  projectBookmarks: CreateProjectBookmarkInput[];

  @Field(() => [CreateProjectMemberInput], { nullable: false })
  projectMembers: CreateProjectMemberInput[];

  @Field(() => [CreateProjectMemberOutInput], { nullable: false })
  projectMemberOuts: CreateProjectMemberOutInput[];

  @Field(() => [CreateProjectReviewInput], { nullable: false })
  projectReviews: CreateProjectReviewInput[];

  @Field(() => [CreateUserInterestKeywordInput], { nullable: false })
  userInterestKeywords: CreateUserInterestKeywordInput[];
}

@InputType()
export class CreateUserInput extends PickType(MutationUserBase, FieldsUserCreate, InputType) {}

@InputType()
export class UpdateUserInput extends PickType(MutationUserBase, FieldsUserUpdate, InputType) {}

@InputType()
export class UpdateOneUserInput {
  @Field()
  id: string;

  @Field(() => UpdateUserInput)
  update: UpdateUserInput;
}

@InputType()
export class CreateOneUserInput {
  @Field(() => CreateUserInput)
  user: CreateUserInput;
}
