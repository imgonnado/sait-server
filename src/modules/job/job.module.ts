import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { JobEntity } from '@project/api/database';

import { JobDTO } from './dto/job.dto';
import { JobService } from './job.service';
import { JobResolver } from './job.resolver';
import { JobRepository } from './job.repository';

@Module({
  providers: [JobResolver, JobService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([JobEntity])],
      dtos: [{ DTOClass: JobDTO }],
    }),
    TypeOrmModule.forFeature([JobEntity, JobRepository]),
  ],
})
export class JobModule {}
