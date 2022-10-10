import { ProjectMemberOutEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectMemberOutService } from '../service/project-member-out.service';
import { ProjectMemberOutDTO } from '../dto/project-member-out.dto';
import { CreateOneProjectMemberOutInput, UpdateOneProjectMemberOutInput } from '../dto/project-member-out.input';

@Resolver(() => ProjectMemberOutDTO)
export class ProjectMemberOutResolver extends CRUDResolver(ProjectMemberOutDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectMemberOutEntity) readonly service: QueryService<ProjectMemberOutEntity>,
    private projectMemberOutService: ProjectMemberOutService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectMemberOutDTO)
  async createOneProjectMemberOut(@Args('input') input: CreateOneProjectMemberOutInput): Promise<ProjectMemberOutDTO> {
    const res = await this.service.createOne(input.projectMemberOut);
    return res;
  }

  @Mutation(() => ProjectMemberOutDTO)
  async updateOneProjectMemberOut(@Args('input') input: UpdateOneProjectMemberOutInput): Promise<ProjectMemberOutDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
