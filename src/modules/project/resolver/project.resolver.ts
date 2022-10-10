import { ProjectEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectService } from '../service/project.service';
import { ProjectDTO } from '../dto/project.dto';
import { CreateOneProjectInput, UpdateOneProjectInput } from '../dto/project.input';

@Resolver(() => ProjectDTO)
export class ProjectResolver extends CRUDResolver(ProjectDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectEntity) readonly service: QueryService<ProjectEntity>,
    private projectService: ProjectService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectDTO)
  async createOneProject(@Args('input') input: CreateOneProjectInput): Promise<ProjectDTO> {
    const res = await this.service.createOne(input.project);
    return res;
  }

  @Mutation(() => ProjectDTO)
  async updateOneProject(@Args('input') input: UpdateOneProjectInput): Promise<ProjectDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
