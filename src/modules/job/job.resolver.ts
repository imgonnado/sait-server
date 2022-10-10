import { JobEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { JobService } from './job.service';
import { JobDTO } from './dto/job.dto';
import { CreateOneJobInput, UpdateOneJobInput } from './dto/job.input';

@Resolver(() => JobDTO)
export class JobResolver extends CRUDResolver(JobDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(JobEntity) readonly service: QueryService<JobEntity>,
    private jobService: JobService,
  ) {
    super(service);
  }

  @Mutation(() => JobDTO)
  async createOneJob(@Args('input') input: CreateOneJobInput): Promise<JobDTO> {
    const res = this.service.createOne(input.job);
    return res;
  }

  @Mutation(() => JobDTO)
  async updateOneJob(@Args('input') input: UpdateOneJobInput): Promise<JobDTO> {
    const res = this.service.updateOne(input.id, input.update);
    return res;
  }
}
