import { ProfileEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProfileService } from './profile.service';
import { ProfileDTO } from './dto/profile.dto';
import { CreateOneProfileInput, UpdateOneProfileInput } from './dto/profile.input';

@Resolver(() => ProfileDTO)
export class ProfileResolver extends CRUDResolver(ProfileDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProfileEntity) readonly service: QueryService<ProfileEntity>,
    private profileService: ProfileService,
  ) {
    super(service);
  }

  @Mutation(() => ProfileDTO)
  async createOneProfile(@Args('input') input: CreateOneProfileInput): Promise<ProfileDTO> {
    const res = this.service.createOne(input.profile);
    return res;
  }

  @Mutation(() => ProfileDTO)
  async updateOneProfile(@Args('input') input: UpdateOneProfileInput): Promise<ProfileDTO> {
    const res = this.service.updateOne(input.id, input.update);
    return res;
  }
}
