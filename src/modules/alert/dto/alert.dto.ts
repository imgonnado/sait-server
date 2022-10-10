import { GraphQLJSON } from 'graphql-type-json';
import { IDField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { IAlertBase } from '@project/shared/interfaces';
import { AlertType, Flag } from '@project/shared/enum';
import { CreatedOnlyBase, UpdateableBase, DeletableBase } from '../../common/dto/base.dto';

@InputType('AlertInput')
@ObjectType('Alert')
export class AlertDTO extends CreatedOnlyBase implements IAlertBase {
  @Field()
  userId: string;

  @Field({ nullable: true })
  targetUserId: string | null;

  @Field(() => AlertType, { nullable: true, defaultValue: AlertType.general })
  alertType: AlertType;

  @Field({ nullable: true })
  projectId: string | null;

  @Field({ nullable: true })
  msg: string | null;

  @Field(() => Flag, { nullable: true, defaultValue: Flag.N })
  readFlag: Flag;
}
