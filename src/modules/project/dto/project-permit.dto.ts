import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {} from '@project/shared/enum';
import { IProjectPermitBase } from '@project/shared/interfaces';
import { CreatedOnlyBase } from '../../common/dto/base.dto';

@InputType('ProjectPermitInput')
@ObjectType('ProjectPermit')
export class ProjectPermitDTO extends CreatedOnlyBase implements IProjectPermitBase {
  @Field()
  projectId: string;

  @Field({ nullable: true })
  adminuserId: string | null;
}
