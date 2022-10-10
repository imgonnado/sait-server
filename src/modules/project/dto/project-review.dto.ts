import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {} from '@project/shared/enum';
import { IProjectReviewBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

@InputType('ProjectReviewInput')
@ObjectType('ProjectReview')
export class ProjectReviewDTO extends CreatedOnlyBase implements IProjectReviewBase {
  @Field()
  projectId: string;

  @Field()
  userId: string;

  @Field({ nullable: true })
  targetUserId: string | null;

  @Field({ nullable: true })
  feedback: string | null;

  @Field({ defaultValue: '1' })
  score: number;
}
