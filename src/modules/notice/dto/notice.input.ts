import { INoticeBase } from '@project/shared/interfaces';
import {
  FieldsNoticeCreate,
  FieldsNoticeUpdate,
  ICreatedOnlyBase,
  IUpdateableBase,
  IDeletableBase,
} from '@project/shared/interfaces';
import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';
import { NoticeDTO } from './notice.dto';

@InputType({ isAbstract: true })
class MutationNoticeBase extends NoticeDTO implements INoticeBase, ICreatedOnlyBase {}

@InputType()
export class CreateNoticeInput extends PickType(MutationNoticeBase, FieldsNoticeCreate, InputType) {}

@InputType()
export class UpdateNoticeInput extends PickType(MutationNoticeBase, FieldsNoticeUpdate, InputType) {}

@InputType()
export class UpdateOneNoticeInput {
  @Field()
  id: string;

  @Field(() => UpdateNoticeInput)
  update: UpdateNoticeInput;
}

@InputType()
export class CreateOneNoticeInput {
  @Field(() => CreateNoticeInput)
  notice: CreateNoticeInput;
}
