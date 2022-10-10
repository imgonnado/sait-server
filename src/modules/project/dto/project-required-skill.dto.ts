import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {} from '@project/shared/enum';
import { IProjectRequiredSkillBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

@InputType('ProjectRequiredSkillInput')
@ObjectType('ProjectRequiredSkill')
export class ProjectRequiredSkillDTO extends CreatedOnlyBase implements IProjectRequiredSkillBase {
  @Field()
  projectId: string;

  @Field()
  jobSkillId: string;
}
