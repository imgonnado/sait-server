import { ProjectResearchEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectResearchService } from '../service/project-research.service';
import { ProjectResearchDTO } from '../dto/project-research.dto';
import { CreateOneProjectResearchInput, UpdateOneProjectResearchInput } from '../dto/project-research.input';

@Resolver(() => ProjectResearchDTO)
export class ProjectResearchResolver extends CRUDResolver(ProjectResearchDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectResearchEntity) readonly service: QueryService<ProjectResearchEntity>,
    private projectResearchService: ProjectResearchService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectResearchDTO)
  async createOneProjectResearch(@Args('input') input: CreateOneProjectResearchInput): Promise<ProjectResearchDTO> {
    const res = await this.service.createOne(input.projectResearch);
    return res;
  }

  @Mutation(() => ProjectResearchDTO)
  async updateOneProjectResearch(@Args('input') input: UpdateOneProjectResearchInput): Promise<ProjectResearchDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
