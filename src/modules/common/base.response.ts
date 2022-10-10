import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseResponse {
  constructor() {
    this.result_code = 1;
    this.desc = '성공';
  }
  @Field(() => Int)
  result_code: number;

  @Field(() => String)
  desc: string;
}
