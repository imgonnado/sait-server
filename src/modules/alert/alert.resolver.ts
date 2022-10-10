import { AlertEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { AlertService } from './alert.service';
import { AlertDTO } from './dto/alert.dto';
import { CreateOneAlertInput, UpdateOneAlertInput } from './dto/alert.input';

@Resolver(() => AlertDTO)
export class AlertResolver extends CRUDResolver(AlertDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(AlertEntity) readonly service: QueryService<AlertEntity>,
    private alertService: AlertService,
  ) {
    super(service);
  }

  @Mutation(() => AlertDTO)
  async createOneAlert(@Args('input') input: CreateOneAlertInput): Promise<AlertDTO> {
    const res = this.service.createOne(input.alert);
    return res;
  }

  @Mutation(() => AlertDTO)
  async updateOneAlert(@Args('input') input: UpdateOneAlertInput): Promise<AlertDTO> {
    const res = this.service.updateOne(input.id, input.update);
    return res;
  }
}
