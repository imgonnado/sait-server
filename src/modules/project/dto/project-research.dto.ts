import { UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {} from '@project/shared/enum';
import { IProjectResearchBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

import { ProjectResearchAnswerDTO } from '~/modules/project/dto/project-research-answer.dto';

@InputType('ProjectResearchInput')
@ObjectType('ProjectResearch')
@UnPagedRelation('projectResearchAnswers', () => ProjectResearchAnswerDTO)
export class ProjectResearchDTO extends CreatedOnlyBase implements IProjectResearchBase {
  @Field()
  projectId: string;

  @Field({ nullable: true })
  priority: number | null;

  @Field({ nullable: true })
  title: string | null;
}
