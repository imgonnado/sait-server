import { ProjectImageEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectImageService } from '../service/project-image.service';
import { ProjectImageDTO } from '../dto/project-image.dto';
import { CreateOneProjectImageInput, UpdateOneProjectImageInput } from '../dto/project-image.input';

@Resolver(() => ProjectImageDTO)
export class ProjectImageResolver extends CRUDResolver(ProjectImageDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectImageEntity) readonly service: QueryService<ProjectImageEntity>,
    private projectImageService: ProjectImageService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectImageDTO)
  async createOneProjectImage(@Args('input') input: CreateOneProjectImageInput): Promise<ProjectImageDTO> {
    const res = await this.service.createOne(input.projectImage);
    return res;
  }

  @Mutation(() => ProjectImageDTO)
  async updateOneProjectImage(@Args('input') input: UpdateOneProjectImageInput): Promise<ProjectImageDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
