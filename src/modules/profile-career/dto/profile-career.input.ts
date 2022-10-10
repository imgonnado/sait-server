import { IProfileCareerBase } from '@project/shared/interfaces';
import {
  FieldsProfileCareerCreate,
  FieldsProfileCareerUpdate,
  ICreatedOnlyBase,
  IUpdateableBase,
  IDeletableBase,
} from '@project/shared/interfaces';
import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';
import { ProfileCareerDTO } from './profile-career.dto';

@InputType({ isAbstract: true })
class MutationProfileCareerBase extends ProfileCareerDTO implements IProfileCareerBase, ICreatedOnlyBase {}

@InputType()
export class CreateProfileCareerInput extends PickType(
  MutationProfileCareerBase,
  FieldsProfileCareerCreate,
  InputType,
) {}

@InputType()
export class UpdateProfileCareerInput extends PickType(
  MutationProfileCareerBase,
  FieldsProfileCareerUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneProfileCareerInput {
  @Field()
  id: string;

  @Field(() => UpdateProfileCareerInput)
  update: UpdateProfileCareerInput;
}

@InputType()
export class CreateOneProfileCareerInput {
  @Field(() => CreateProfileCareerInput)
  profileCareer: CreateProfileCareerInput;
}
