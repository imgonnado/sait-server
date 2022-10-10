import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {} from '@project/shared/enum';
import { IProjectRequiredMemberBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

@InputType('ProjectRequiredMemberInput')
@ObjectType('ProjectRequiredMember')
export class ProjectRequiredMemberDTO extends CreatedOnlyBase implements IProjectRequiredMemberBase {
  @Field()
  projectId: string;

  @Field({ nullable: true })
  jobId: string | null;

  @Field({ nullable: true, defaultValue: '0' })
  jobCount: number | null;
}
