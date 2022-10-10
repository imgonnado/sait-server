import { UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CategoryType, OnoffType, StatusType } from '@project/shared/enum';
import { IProjectBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

import { ProjectImageDTO } from '~/modules/project/dto/project-image.dto';
import { ProjectKeywordDTO } from '~/modules/project/dto/project-keyword.dto';
import { ProjectMemberOutDTO } from '~/modules/project/dto/project-member-out.dto';
import { ProjectMemberDTO } from '~/modules/project/dto/project-member.dto';
import { ProjectPermitDTO } from '~/modules/project/dto/project-permit.dto';
import { ProjectRequiredMemberDTO } from '~/modules/project/dto/project-required-member.dto';
import { ProjectRequiredSkillDTO } from '~/modules/project/dto/project-required-skill.dto';
import { ProjectResearchDTO } from '~/modules/project/dto/project-research.dto';
import { ProjectReviewDTO } from '~/modules/project/dto/project-review.dto';

@InputType('ProjectInput')
@ObjectType('Project')
@UnPagedRelation('projectImages', () => ProjectImageDTO)
@UnPagedRelation('projectKeywords', () => ProjectKeywordDTO)
@UnPagedRelation('projectMembers', () => ProjectMemberDTO)
@UnPagedRelation('projectMemberOuts', () => ProjectMemberOutDTO)
@UnPagedRelation('projectPermits', () => ProjectPermitDTO)
@UnPagedRelation('projectRequiredMembers', () => ProjectRequiredMemberDTO)
@UnPagedRelation('projectRequiredSkills', () => ProjectRequiredSkillDTO)
@UnPagedRelation('projectResearchs', () => ProjectResearchDTO)
@UnPagedRelation('projectReviews', () => ProjectReviewDTO)
export class ProjectDTO extends CreatedOnlyBase implements IProjectBase {
  @Field({ nullable: true })
  projectTitle: string | null;

  @Field(() => StatusType, { nullable: true, defaultValue: StatusType.recruit })
  status: StatusType;

  @Field(() => OnoffType, { nullable: true, defaultValue: OnoffType.onoff })
  onoff: OnoffType;

  @Field({ nullable: true })
  location: string | null;

  @Field({ nullable: true })
  locationCode: string | null;

  @Field({ nullable: true })
  image: string | null;

  @Field({ nullable: true })
  description: string | null;

  @Field(() => CategoryType, { nullable: true, defaultValue: CategoryType.junior })
  category: CategoryType;

  @Field({ nullable: true })
  recruitStartAt: Date | null;

  @Field({ nullable: true, defaultValue: '0' })
  hitCount: number | null;

  @Field({ nullable: true, defaultValue: '0' })
  bookmarkCount: number | null;

  @Field({ defaultValue: 0.0 })
  rate: string;

  @Field({ nullable: true })
  directLink: string | null;
}
