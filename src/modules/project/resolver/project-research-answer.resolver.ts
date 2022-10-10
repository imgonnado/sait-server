import { ProjectResearchAnswerEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { ProjectResearchAnswerService } from '../service/project-research-answer.service';
import { ProjectResearchAnswerDTO } from '../dto/project-research-answer.dto';
import {
  CreateOneProjectResearchAnswerInput,
  UpdateOneProjectResearchAnswerInput,
} from '../dto/project-research-answer.input';

@Resolver(() => ProjectResearchAnswerDTO)
export class ProjectResearchAnswerResolver extends CRUDResolver(ProjectResearchAnswerDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(ProjectResearchAnswerEntity) readonly service: QueryService<ProjectResearchAnswerEntity>,
    private projectResearchAnswerService: ProjectResearchAnswerService,
  ) {
    super(service);
  }

  @Mutation(() => ProjectResearchAnswerDTO)
  async createOneProjectResearchAnswer(
    @Args('input') input: CreateOneProjectResearchAnswerInput,
  ): Promise<ProjectResearchAnswerDTO> {
    const res = await this.service.createOne(input.projectResearchAnswer);
    return res;
  }

  @Mutation(() => ProjectResearchAnswerDTO)
  async updateOneProjectResearchAnswer(
    @Args('input') input: UpdateOneProjectResearchAnswerInput,
  ): Promise<ProjectResearchAnswerDTO> {
    const res = await this.service.updateOne(input.id, input.update);
    return res;
  }
}
