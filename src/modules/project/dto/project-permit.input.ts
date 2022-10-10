import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  FieldsProjectPermitCreate,
  FieldsProjectPermitUpdate,
  ICreatedOnlyBase,
  IProjectPermitBase,
} from '@project/shared/interfaces';
import { ProjectPermitDTO } from './project-permit.dto';

@InputType({ isAbstract: true })
class MutationProjectPermitBase extends ProjectPermitDTO implements IProjectPermitBase, ICreatedOnlyBase {}

@InputType()
export class CreateProjectPermitInput extends PickType(
  MutationProjectPermitBase,
  FieldsProjectPermitCreate,
  InputType,
) {}

@InputType()
export class UpdateProjectPermitInput extends PickType(
  MutationProjectPermitBase,
  FieldsProjectPermitUpdate,
  InputType,
) {}

@InputType()
export class UpdateOneProjectPermitInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectPermitInput)
  update: UpdateProjectPermitInput;
}

@InputType()
export class CreateOneProjectPermitInput {
  @Field(() => CreateProjectPermitInput)
  projectPermit: CreateProjectPermitInput;
}
