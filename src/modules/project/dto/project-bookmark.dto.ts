import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {} from '@project/shared/enum';
import { IProjectBookmarkBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

@InputType('ProjectBookmarkInput')
@ObjectType('ProjectBookmark')
export class ProjectBookmarkDTO extends CreatedOnlyBase implements IProjectBookmarkBase {
  @Field()
  projectId: string;

  @Field({ nullable: true })
  userId: string | null;
}
