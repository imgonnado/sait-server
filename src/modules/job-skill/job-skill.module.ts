import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { JobSkillEntity } from '@project/api/database';

import { JobSkillDTO } from './dto/job-skill.dto';
import { JobSkillService } from './job-skill.service';
import { JobSkillResolver } from './job-skill.resolver';
import { JobSkillRepository } from './job-skill.repository';

@Module({
  providers: [JobSkillResolver, JobSkillService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([JobSkillEntity])],
      dtos: [{ DTOClass: JobSkillDTO }],
    }),
    NestjsQueryTypeOrmModule.forFeature([JobSkillEntity, JobSkillRepository]),
  ],
})
export class JobSkillModule {}
