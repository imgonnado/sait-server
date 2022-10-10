import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {} from '@project/shared/enum';
import { IProjectImageBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

@InputType('ProjectImageInput')
@ObjectType('ProjectImage')
export class ProjectImageDTO extends CreatedOnlyBase implements IProjectImageBase {
  @Field()
  projectId: string;

  @Field()
  image: string;
}
