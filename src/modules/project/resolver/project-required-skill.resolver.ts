import { ProjectRequiredSkillEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectRequiredSkillService } from '../service/project-required-skill.service';
import { ProjectRequiredSkillDTO } from '../dto/project-required-skill.dto';
import {
  CreateOneProjectRequiredSkillInput,
  UpdateOneProjectRequiredSkillInput,
} from '../dto/project-required-skill.input';

@Resolver(() => ProjectRequiredSkillDTO)
export class ProjectRequiredSkillResolver extends CRUDResolver(ProjectRequiredSkillDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectRequiredSkillEntity) readonly service: QueryService<ProjectRequiredSkillEntity>,
    private projectRequiredSkillService: ProjectRequiredSkillService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectRequiredSkillDTO)
  async createOneProjectRequiredSkill(
    @Args('input') input: CreateOneProjectRequiredSkillInput,
  ): Promise<ProjectRequiredSkillDTO> {
    const res = await this.service.createOne(input.projectRequiredSkill);
    return res;
  }

  @Mutation(() => ProjectRequiredSkillDTO)
  async updateOneProjectRequiredSkill(
    @Args('input') input: UpdateOneProjectRequiredSkillInput,
  ): Promise<ProjectRequiredSkillDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
