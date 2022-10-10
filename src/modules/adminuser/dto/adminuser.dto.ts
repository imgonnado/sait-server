import { GraphQLJSON } from 'graphql-type-json';
import { IDField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { IAdminuserBase } from '@project/shared/interfaces';
import {} from '@project/shared/enum';
import { CreatedOnlyBase, UpdateableBase, DeletableBase } from '../../common/dto/base.dto';

import { NoticeDTO } from '~/modules/notice/dto/notice.dto';

@InputType('AdminuserInput')
@ObjectType('Adminuser')
@UnPagedRelation('notices', () => NoticeDTO)
export class AdminuserDTO extends CreatedOnlyBase implements IAdminuserBase {
  @Field()
  name: string;

  @Field({ nullable: true })
  nickname: string | null;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  loginType: number | null;

  @Field({ nullable: true })
  image: string | null;
}
