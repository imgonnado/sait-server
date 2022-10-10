import { IImage } from '@project/shared/interfaces';
import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { DeletableBase } from '~/modules/common/dto/base.dto';

@InputType('ImageInput')
@ObjectType('Image')
export class ImageDTO extends DeletableBase implements IImage {
  @Field({ nullable: false })
  url: string;

  @Field({ nullable: false })
  path: string;

  @Field()
  alert: string;

  @FilterableField({ nullable: false })
  priority: number;
}
