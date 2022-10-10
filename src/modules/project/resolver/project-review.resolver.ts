import { ProjectReviewEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectReviewService } from '../service/project-review.service';
import { ProjectReviewDTO } from '../dto/project-review.dto';
import { CreateOneProjectReviewInput, UpdateOneProjectReviewInput } from '../dto/project-review.input';

@Resolver(() => ProjectReviewDTO)
export class ProjectReviewResolver extends CRUDResolver(ProjectReviewDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectReviewEntity) readonly service: QueryService<ProjectReviewEntity>,
    private projectReviewService: ProjectReviewService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectReviewDTO)
  async createOneProjectReview(@Args('input') input: CreateOneProjectReviewInput): Promise<ProjectReviewDTO> {
    const res = await this.service.createOne(input.projectReview);
    return res;
  }

  @Mutation(() => ProjectReviewDTO)
  async updateOneProjectReview(@Args('input') input: UpdateOneProjectReviewInput): Promise<ProjectReviewDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
