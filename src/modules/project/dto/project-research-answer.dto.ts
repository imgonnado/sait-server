import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {} from '@project/shared/enum';
import { IProjectResearchAnswerBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

@InputType('ProjectResearchAnswerInput')
@ObjectType('ProjectResearchAnswer')
export class ProjectResearchAnswerDTO extends CreatedOnlyBase implements IProjectResearchAnswerBase {
  @Field()
  projectResearchId: string;

  @Field()
  userId: string;

  @Field({ nullable: true })
  answer: string | null;
}
