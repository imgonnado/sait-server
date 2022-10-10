import { IUserInterestKeywordBase } from '@project/shared/interfaces';
import {
  FieldsUserInterestKeywordCreate,
  FieldsUserInterestKeywordUpdate,
  ICreatedOnlyBase,
  IUpdateableBase,
  IDeletableBase,
} from '@project/shared/interfaces';
import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';
import { UserInterestKeywordDTO } from './user-interest-keyword.dto';

@InputType({ isAbstract: true })
class MutationUserInterestKeywordBase
  extends UserInterestKeywordDTO
  implements IUserInterestKeywordBase, ICreatedOnlyBase {}

@InputType()
export class CreateUserInterestKeywordInput extends PickType(
  MutationUserInterestKeywordBase,
  FieldsUserInterestKeywordCreate,
  InputType,
) {}

@InputType()
export class UpdateUserInterestKeywordInput extends PickType(
  MutationUserInterestKeywordBase,
  FieldsUserInterestKeywordUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneUserInterestKeywordInput {
  @Field()
  id: string;

  @Field(() => UpdateUserInterestKeywordInput)
  update: UpdateUserInterestKeywordInput;
}

@InputType()
export class CreateOneUserInterestKeywordInput {
  @Field(() => CreateUserInterestKeywordInput)
  userInterestKeyword: CreateUserInterestKeywordInput;
}
