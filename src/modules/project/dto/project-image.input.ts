import { Field, InputType, PickType } from '@nestjs/graphql';
import {
  FieldsProjectImageCreate,
  FieldsProjectImageUpdate,
  ICreatedOnlyBase,
  IProjectImageBase,
} from '@project/shared/interfaces';
import { ProjectImageDTO } from './project-image.dto';

@InputType({ isAbstract: true })
class MutationProjectImageBase extends ProjectImageDTO implements IProjectImageBase, ICreatedOnlyBase {}

@InputType()
export class CreateProjectImageInput extends PickType(MutationProjectImageBase, FieldsProjectImageCreate, InputType) {}

@InputType()
export class UpdateProjectImageInput extends PickType(MutationProjectImageBase, FieldsProjectImageUpdate, InputType) {}

@InputType()
export class UpdateOneProjectImageInput {
  @Field()
  id: string;

  @Field(() => UpdateProjectImageInput)
  update: UpdateProjectImageInput;
}

@InputType()
export class CreateOneProjectImageInput {
  @Field(() => CreateProjectImageInput)
  projectImage: CreateProjectImageInput;
}
