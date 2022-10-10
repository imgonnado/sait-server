import { ProjectKeywordEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectKeywordService } from '../service/project-keyword.service';
import { ProjectKeywordDTO } from '../dto/project-keyword.dto';
import { CreateOneProjectKeywordInput, UpdateOneProjectKeywordInput } from '../dto/project-keyword.input';

@Resolver(() => ProjectKeywordDTO)
export class ProjectKeywordResolver extends CRUDResolver(ProjectKeywordDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectKeywordEntity) readonly service: QueryService<ProjectKeywordEntity>,
    private projectKeywordService: ProjectKeywordService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectKeywordDTO)
  async createOneProjectKeyword(@Args('input') input: CreateOneProjectKeywordInput): Promise<ProjectKeywordDTO> {
    const res = await this.service.createOne(input.projectKeyword);
    return res;
  }

  @Mutation(() => ProjectKeywordDTO)
  async updateOneProjectKeyword(@Args('input') input: UpdateOneProjectKeywordInput): Promise<ProjectKeywordDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
