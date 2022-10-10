import { JobCategoryEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { JobCategoryService } from './job-category.service';
import { JobCategoryDTO } from './dto/job-category.dto';
import { CreateOneJobCategoryInput, UpdateOneJobCategoryInput } from './dto/job-category.input';

@Resolver(() => JobCategoryDTO)
export class JobCategoryResolver extends CRUDResolver(JobCategoryDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(JobCategoryEntity) readonly service: QueryService<JobCategoryEntity>,
    private jobCategoryService: JobCategoryService,
  ) {
    super(service);
  }

  @Mutation(() => JobCategoryDTO)
  async createOneJobCategory(@Args('input') input: CreateOneJobCategoryInput): Promise<JobCategoryDTO> {
    const res = this.service.createOne(input.jobCategory);
    return res;
  }

  @Mutation(() => JobCategoryDTO)
  async updateOneJobCategory(@Args('input') input: UpdateOneJobCategoryInput): Promise<JobCategoryDTO> {
    const res = this.service.updateOne(input.id, input.update);
    return res;
  }
}
