import { ProjectBookmarkEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectBookmarkService } from '../service/project-bookmark.service';
import { ProjectBookmarkDTO } from '../dto/project-bookmark.dto';
import { CreateOneProjectBookmarkInput, UpdateOneProjectBookmarkInput } from '../dto/project-bookmark.input';

@Resolver(() => ProjectBookmarkDTO)
export class ProjectBookmarkResolver extends CRUDResolver(ProjectBookmarkDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectBookmarkEntity) readonly service: QueryService<ProjectBookmarkEntity>,
    private projectBookmarkService: ProjectBookmarkService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectBookmarkDTO)
  async createOneProjectBookmark(@Args('input') input: CreateOneProjectBookmarkInput): Promise<ProjectBookmarkDTO> {
    const res = await this.service.createOne(input.projectBookmark);
    return res;
  }

  @Mutation(() => ProjectBookmarkDTO)
  async updateOneProjectBookmark(@Args('input') input: UpdateOneProjectBookmarkInput): Promise<ProjectBookmarkDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
