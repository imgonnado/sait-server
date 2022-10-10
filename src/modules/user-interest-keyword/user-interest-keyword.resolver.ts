import { UserInterestKeywordEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UserInterestKeywordService } from './user-interest-keyword.service';
import { UserInterestKeywordDTO } from './dto/user-interest-keyword.dto';
import {
  CreateOneUserInterestKeywordInput,
  UpdateOneUserInterestKeywordInput,
} from './dto/user-interest-keyword.input';

@Resolver(() => UserInterestKeywordDTO)
export class UserInterestKeywordResolver extends CRUDResolver(UserInterestKeywordDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(UserInterestKeywordEntity) readonly service: QueryService<UserInterestKeywordEntity>,
    private userInterestKeywordService: UserInterestKeywordService,
  ) {
    super(service);
  }

  @Mutation(() => UserInterestKeywordDTO)
  async createOneUserInterestKeyword(
    @Args('input') input: CreateOneUserInterestKeywordInput,
  ): Promise<UserInterestKeywordDTO> {
    const res = this.service.createOne(input.userInterestKeyword);
    return res;
  }

  @Mutation(() => UserInterestKeywordDTO)
  async updateOneUserInterestKeyword(
    @Args('input') input: UpdateOneUserInterestKeywordInput,
  ): Promise<UserInterestKeywordDTO> {
    const res = this.service.updateOne(input.id, input.update);
    return res;
  }
}
