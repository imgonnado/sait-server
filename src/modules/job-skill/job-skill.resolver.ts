import { JobSkillEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { JobSkillService } from './job-skill.service';
import { JobSkillDTO } from './dto/job-skill.dto';
import { CreateOneJobSkillInput, UpdateOneJobSkillInput } from './dto/job-skill.input';

@Resolver(() => JobSkillDTO)
export class JobSkillResolver extends CRUDResolver(JobSkillDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(JobSkillEntity) readonly service: QueryService<JobSkillEntity>,
    private jobSkillService: JobSkillService,
  ) {
    super(service);
  }

  @Mutation(() => JobSkillDTO)
  async createOneJobSkill(@Args('input') input: CreateOneJobSkillInput): Promise<JobSkillDTO> {
    const res = this.service.createOne(input.jobSkill);
    return res;
  }

  @Mutation(() => JobSkillDTO)
  async updateOneJobSkill(@Args('input') input: UpdateOneJobSkillInput): Promise<JobSkillDTO> {
    const res = this.service.updateOne(input.id, input.update);
    return res;
  }
}
