import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {} from '@project/shared/enum';
import { IProjectKeywordBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

@InputType('ProjectKeywordInput')
@ObjectType('ProjectKeyword')
export class ProjectKeywordDTO extends CreatedOnlyBase implements IProjectKeywordBase {
  @Field()
  projectId: string;

  @Field()
  keyword: string;
}
