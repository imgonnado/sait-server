import { ProjectMemberEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectMemberService } from '../service/project-member.service';
import { ProjectMemberDTO } from '../dto/project-member.dto';
import { CreateOneProjectMemberInput, UpdateOneProjectMemberInput } from '../dto/project-member.input';

@Resolver(() => ProjectMemberDTO)
export class ProjectMemberResolver extends CRUDResolver(ProjectMemberDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectMemberEntity) readonly service: QueryService<ProjectMemberEntity>,
    private projectMemberService: ProjectMemberService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectMemberDTO)
  async createOneProjectMember(@Args('input') input: CreateOneProjectMemberInput): Promise<ProjectMemberDTO> {
    const res = await this.service.createOne(input.projectMember);
    return res;
  }

  @Mutation(() => ProjectMemberDTO)
  async updateOneProjectMember(@Args('input') input: UpdateOneProjectMemberInput): Promise<ProjectMemberDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
