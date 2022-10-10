import { IAdminuserBase } from '@project/shared/interfaces';
import {
  FieldsAdminuserCreate,
  FieldsAdminuserUpdate,
  ICreatedOnlyBase,
  IUpdateableBase,
  IDeletableBase,
} from '@project/shared/interfaces';
import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';
import { AdminuserDTO } from './adminuser.dto';

import { CreateNoticeInput } from '~/modules/notice/dto/notice.input';

@InputType({ isAbstract: true })
class MutationAdminuserBase extends AdminuserDTO implements IAdminuserBase, ICreatedOnlyBase {
  @Field(() => [CreateNoticeInput], { nullable: false })
  notices: CreateNoticeInput[];
}

@InputType()
export class CreateAdminuserInput extends PickType(MutationAdminuserBase, FieldsAdminuserCreate, InputType) {}

@InputType()
export class UpdateAdminuserInput extends PickType(MutationAdminuserBase, FieldsAdminuserUpdate, InputType) {}

@InputType()
export class UpdateOneAdminuserInput {
  @Field()
  id: string;

  @Field(() => UpdateAdminuserInput)
  update: UpdateAdminuserInput;
}

@InputType()
export class CreateOneAdminuserInput {
  @Field(() => CreateAdminuserInput)
  adminuser: CreateAdminuserInput;
}
