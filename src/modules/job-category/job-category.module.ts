import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { JobCategoryEntity } from '@project/api/database';

import { JobCategoryDTO } from './dto/job-category.dto';
import { JobCategoryService } from './job-category.service';
import { JobCategoryResolver } from './job-category.resolver';
import { JobCategoryRepository } from './job-category.repository';

@Module({
  providers: [JobCategoryResolver, JobCategoryService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([JobCategoryEntity])],
      dtos: [{ DTOClass: JobCategoryDTO }],
    }),
    NestjsQueryTypeOrmModule.forFeature([JobCategoryEntity, JobCategoryRepository]),
  ],
})
export class JobCategoryModule {}
