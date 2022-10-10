import { ProfileSkillEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProfileSkillService } from './profile-skill.service';
import { ProfileSkillDTO } from './dto/profile-skill.dto';
import { CreateOneProfileSkillInput, UpdateOneProfileSkillInput } from './dto/profile-skill.input';

@Resolver(() => ProfileSkillDTO)
export class ProfileSkillResolver extends CRUDResolver(ProfileSkillDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProfileSkillEntity) readonly service: QueryService<ProfileSkillEntity>,
    private profileSkillService: ProfileSkillService,
  ) {
    super(service);
  }

  @Mutation(() => ProfileSkillDTO)
  async createOneProfileSkill(@Args('input') input: CreateOneProfileSkillInput): Promise<ProfileSkillDTO> {
    const res = this.service.createOne(input.profileSkill);
    return res;
  }

  @Mutation(() => ProfileSkillDTO)
  async updateOneProfileSkill(@Args('input') input: UpdateOneProfileSkillInput): Promise<ProfileSkillDTO> {
    const res = this.service.updateOne(input.id, input.update);
    return res;
  }
}
