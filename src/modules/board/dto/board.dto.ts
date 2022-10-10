import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { DeletableBase } from '../../common/dto/base.dto';

@ObjectType('Board')
@InputType('BoardInput')
export class BoardDTO extends DeletableBase {
  @Field(() => Int)
  seq: number;

  @Field()
  reply: string;

  @Field(() => Int)
  parent: number;

  @Field(() => Int)
  comment: number;

  @Field()
  subject: string;

  @Field()
  content: string;

  @Field(() => Int)
  hitCnt: number;

  @Field(() => Int)
  goodCnt: number;

  @Field(() => Int)
  nogoodCnt: number;

  @Field()
  memId: string;

  @Field()
  password: string;

  @Field()
  name: string;
}
