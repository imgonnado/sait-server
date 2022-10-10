import { ProfileCareerEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProfileCareerService } from './profile-career.service';
import { ProfileCareerDTO } from './dto/profile-career.dto';
import { CreateOneProfileCareerInput, UpdateOneProfileCareerInput } from './dto/profile-career.input';

@Resolver(() => ProfileCareerDTO)
export class ProfileCareerResolver extends CRUDResolver(ProfileCareerDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProfileCareerEntity) readonly service: QueryService<ProfileCareerEntity>,
    private profileCareerService: ProfileCareerService,
  ) {
    super(service);
  }

  @Mutation(() => ProfileCareerDTO)
  async createOneProfileCareer(@Args('input') input: CreateOneProfileCareerInput): Promise<ProfileCareerDTO> {
    const res = this.service.createOne(input.profileCareer);
    return res;
  }

  @Mutation(() => ProfileCareerDTO)
  async updateOneProfileCareer(@Args('input') input: UpdateOneProfileCareerInput): Promise<ProfileCareerDTO> {
    const res = this.service.updateOne(input.id, input.update);
    return res;
  }
}
