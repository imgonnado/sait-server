import { IProfileSkillBase } from '@project/shared/interfaces';
import {
  FieldsProfileSkillCreate,
  FieldsProfileSkillUpdate,
  ICreatedOnlyBase,
  IUpdateableBase,
  IDeletableBase,
} from '@project/shared/interfaces';
import { InputType, PickType, ObjectType, Field } from '@nestjs/graphql';
import { ProfileSkillDTO } from './profile-skill.dto';

@InputType({ isAbstract: true })
class MutationProfileSkillBase extends ProfileSkillDTO implements IProfileSkillBase, ICreatedOnlyBase {}

@InputType()
export class CreateProfileSkillInput extends PickType(MutationProfileSkillBase, FieldsProfileSkillCreate, InputType) {}

@InputType()
export class UpdateProfileSkillInput extends PickType(MutationProfileSkillBase, FieldsProfileSkillUpdate, InputType) {}

@InputType()
export class UpdateOneProfileSkillInput {
  @Field()
  id: string;

  @Field(() => UpdateProfileSkillInput)
  update: UpdateProfileSkillInput;
}

@InputType()
export class CreateOneProfileSkillInput {
  @Field(() => CreateProfileSkillInput)
  profileSkill: CreateProfileSkillInput;
}
