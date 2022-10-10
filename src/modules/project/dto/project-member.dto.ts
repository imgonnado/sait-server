import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {} from '@project/shared/enum';
import { IProjectMemberBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

@InputType('ProjectMemberInput')
@ObjectType('ProjectMember')
export class ProjectMemberDTO extends CreatedOnlyBase implements IProjectMemberBase {
  @Field()
  projectId: string;

  @Field()
  userId: string;

  @Field({ nullable: true, defaultValue: 'member' })
  role: string | null;

  @Field()
  profileId: string;

  @Field({ nullable: true })
  jobCode: string | null;

  @Field({ nullable: true, defaultValue: 'waiting' })
  status: string | null;
}
