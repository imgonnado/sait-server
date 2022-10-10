import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ReasonType } from '@project/shared/enum';
import { IProjectMemberOutBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

@InputType('ProjectMemberOutInput')
@ObjectType('ProjectMemberOut')
export class ProjectMemberOutDTO extends CreatedOnlyBase implements IProjectMemberOutBase {
  @Field()
  projectId: string;

  @Field()
  userId: string;

  @Field({ nullable: true })
  projectLeaderUserId: string | null;

  @Field(() => ReasonType, { nullable: true, defaultValue: ReasonType.denied })
  reasonType: ReasonType;

  @Field({ nullable: true })
  description: string | null;
}
