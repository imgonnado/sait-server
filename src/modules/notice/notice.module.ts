import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { NoticeEntity } from '@project/api/database';

import { NoticeDTO } from './dto/notice.dto';
import { NoticeService } from './notice.service';
import { NoticeResolver } from './notice.resolver';
import { NoticeRepository } from './notice.repository';

@Module({
  providers: [NoticeResolver, NoticeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([NoticeEntity])],
      dtos: [{ DTOClass: NoticeDTO }],
    }),
    NestjsQueryTypeOrmModule.forFeature([NoticeEntity, NoticeRepository]),
  ],
})
export class NoticeModule {}
