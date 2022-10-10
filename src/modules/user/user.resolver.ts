import { UserEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { CreateOneUserInput, UpdateOneUserInput } from './dto/user.input';

@Resolver(() => UserDTO)
export class UserResolver extends CRUDResolver(UserDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(UserEntity) readonly service: QueryService<UserEntity>,
    private userService: UserService,
  ) {
    super(service);
  }

  @Mutation(() => UserDTO)
  async createOneUser(@Args('input') input: CreateOneUserInput): Promise<UserDTO> {
    const res = this.service.createOne(input.user);
    return res;
  }

  @Mutation(() => UserDTO)
  async updateOneUser(@Args('input') input: UpdateOneUserInput): Promise<UserDTO> {
    const res = this.service.updateOne(input.id, input.update);
    return res;
  }
}
