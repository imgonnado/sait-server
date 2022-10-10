import { UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Flag } from '@project/shared/enum';
import { IProfileBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

import { ProfileCareerDTO } from '~/modules/profile-career/dto/profile-career.dto';
import { ProfileSkillDTO } from '~/modules/profile-skill/dto/profile-skill.dto';
import { ProjectMemberDTO } from '~/modules/project/dto/project-member.dto';

@InputType('ProfileInput')
@ObjectType('Profile')
@UnPagedRelation('profileCareers', () => ProfileCareerDTO)
@UnPagedRelation('profileSkills', () => ProfileSkillDTO)
@UnPagedRelation('projectMembers', () => ProjectMemberDTO)
export class ProfileDTO extends CreatedOnlyBase implements IProfileBase {
  @Field()
  userId: string;

  @Field(() => Flag, { nullable: true, defaultValue: Flag.N })
  default: Flag;

  @Field()
  jobId: string;

  @Field({ nullable: true })
  introduction: string | null;
}
