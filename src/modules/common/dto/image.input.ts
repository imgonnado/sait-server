import { FieldsImageCreate, FieldsImageUpdate, IImageBase } from '@project/shared/interfaces';
import { InputType, PickType } from '@nestjs/graphql';
import { ImageDTO } from './image.dto';

@InputType({ isAbstract: true })
class MutaionImageBase extends ImageDTO implements IImageBase {}
@InputType()
export class CreateImageInput extends PickType(MutaionImageBase, FieldsImageCreate, InputType) {}

@InputType()
export class UpdateImageInput extends PickType(MutaionImageBase, FieldsImageUpdate, InputType) {}
