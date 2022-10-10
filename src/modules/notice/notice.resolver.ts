import { NoticeEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { NoticeService } from './notice.service';
import { NoticeDTO } from './dto/notice.dto';
import { CreateOneNoticeInput, UpdateOneNoticeInput } from './dto/notice.input';

@Resolver(() => NoticeDTO)
export class NoticeResolver extends CRUDResolver(NoticeDTO, {
  create: { disabled: true },
  update: { disabled: true },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(NoticeEntity) readonly service: QueryService<NoticeEntity>,
    private noticeService: NoticeService,
  ) {
    super(service);
  }

  @Mutation(() => NoticeDTO)
  async createOneNotice(@Args('input') input: CreateOneNoticeInput): Promise<NoticeDTO> {
    const res = this.service.createOne(input.notice);
    return res;
  }

  @Mutation(() => NoticeDTO)
  async updateOneNotice(@Args('input') input: UpdateOneNoticeInput): Promise<NoticeDTO> {
    const res = this.service.updateOne(input.id, input.update);
    return res;
  }
}
