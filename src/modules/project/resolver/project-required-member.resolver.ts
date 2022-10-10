import { ProjectRequiredMemberEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectRequiredMemberService } from '../service/project-required-member.service';
import { ProjectRequiredMemberDTO } from '../dto/project-required-member.dto';
import {
  CreateOneProjectRequiredMemberInput,
  UpdateOneProjectRequiredMemberInput,
} from '../dto/project-required-member.input';

@Resolver(() => ProjectRequiredMemberDTO)
export class ProjectRequiredMemberResolver extends CRUDResolver(ProjectRequiredMemberDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectRequiredMemberEntity) readonly service: QueryService<ProjectRequiredMemberEntity>,
    private projectRequiredMemberService: ProjectRequiredMemberService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectRequiredMemberDTO)
  async createOneProjectRequiredMember(
    @Args('input') input: CreateOneProjectRequiredMemberInput,
  ): Promise<ProjectRequiredMemberDTO> {
    const res = await this.service.createOne(input.projectRequiredMember);
    return res;
  }

  @Mutation(() => ProjectRequiredMemberDTO)
  async updateOneProjectRequiredMember(
    @Args('input') input: UpdateOneProjectRequiredMemberInput,
  ): Promise<ProjectRequiredMemberDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
