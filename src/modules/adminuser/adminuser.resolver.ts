import { AdminuserEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { AdminuserService } from './adminuser.service';
import { AdminuserDTO } from './dto/adminuser.dto';
import { CreateOneAdminuserInput, UpdateOneAdminuserInput } from './dto/adminuser.input';

@Resolver(() => AdminuserDTO)
export class AdminuserResolver extends CRUDResolver(AdminuserDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(AdminuserEntity) readonly service: QueryService<AdminuserEntity>,
    private adminuserService: AdminuserService,
  ) {
    super(service);
  }

  @Mutation(() => AdminuserDTO)
  async createOneAdminuser(@Args('input') input: CreateOneAdminuserInput): Promise<AdminuserDTO> {
    const res = this.service.createOne(input.adminuser);
    return res;
  }

  @Mutation(() => AdminuserDTO)
  async updateOneAdminuser(@Args('input') input: UpdateOneAdminuserInput): Promise<AdminuserDTO> {
    const res = this.service.updateOne(input.id, input.update);
    return res;
  }
}
