import { UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {} from '@project/shared/enum';
import { IUserBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

import { ProfileDTO } from '~/modules/profile/dto/profile.dto';
import { ProjectBookmarkDTO } from '~/modules/project/dto/project-bookmark.dto';
import { ProjectMemberOutDTO } from '~/modules/project/dto/project-member-out.dto';
import { ProjectMemberDTO } from '~/modules/project/dto/project-member.dto';
import { ProjectReviewDTO } from '~/modules/project/dto/project-review.dto';
import { UserInterestKeywordDTO } from '~/modules/user-interest-keyword/dto/user-interest-keyword.dto';

@InputType('UserInput')
@ObjectType('User')
@UnPagedRelation('profiles', () => ProfileDTO)
@UnPagedRelation('projectBookmarks', () => ProjectBookmarkDTO)
@UnPagedRelation('projectMembers', () => ProjectMemberDTO)
@UnPagedRelation('projectMemberOuts', () => ProjectMemberOutDTO)
@UnPagedRelation('projectReviews', () => ProjectReviewDTO)
@UnPagedRelation('userInterestKeywords', () => UserInterestKeywordDTO)
export class UserDTO extends CreatedOnlyBase implements IUserBase {
  @Field()
  name: string;

  @Field({ nullable: true })
  nickname: string | null;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  loginType: number | null;

  @Field({ nullable: true })
  image: string | null;
}
