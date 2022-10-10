import { ProjectPermitEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectPermitService } from '../service/project-permit.service';
import { ProjectPermitDTO } from '../dto/project-permit.dto';
import { CreateOneProjectPermitInput, UpdateOneProjectPermitInput } from '../dto/project-permit.input';

@Resolver(() => ProjectPermitDTO)
export class ProjectPermitResolver extends CRUDResolver(ProjectPermitDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectPermitEntity) readonly service: QueryService<ProjectPermitEntity>,
    private projectPermitService: ProjectPermitService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectPermitDTO)
  async createOneProjectPermit(@Args('input') input: CreateOneProjectPermitInput): Promise<ProjectPermitDTO> {
    const res = await this.service.createOne(input.projectPermit);
    return res;
  }

  @Mutation(() => ProjectPermitDTO)
  async updateOneProjectPermit(@Args('input') input: UpdateOneProjectPermitInput): Promise<ProjectPermitDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
