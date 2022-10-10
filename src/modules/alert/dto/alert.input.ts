import { IAlertBase } from '@project/shared/interfaces';
import {
  FieldsAlertCreate,
  FieldsAlertUpdate,
  ICreatedOnlyBase,
  IUpdateableBase,
  IDeletableBase,
} from '@project/shared/interfaces';
import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';
import { AlertDTO } from './alert.dto';

@InputType({ isAbstract: true })
class MutationAlertBase extends AlertDTO implements IAlertBase, ICreatedOnlyBase {}

@InputType()
export class CreateAlertInput extends PickType(MutationAlertBase, FieldsAlertCreate, InputType) {}

@InputType()
export class UpdateAlertInput extends PickType(MutationAlertBase, FieldsAlertUpdate, InputType) {}

@InputType()
export class UpdateOneAlertInput {
  @Field()
  id: string;

  @Field(() => UpdateAlertInput)
  update: UpdateAlertInput;
}

@InputType()
export class CreateOneAlertInput {
  @Field(() => CreateAlertInput)
  alert: CreateAlertInput;
}
