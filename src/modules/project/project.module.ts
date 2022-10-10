import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import {
  ProjectEntity,
  ProjectBookmarkEntity,
  ProjectImageEntity,
  ProjectKeywordEntity,
  ProjectMemberEntity,
  ProjectMemberOutEntity,
  ProjectPermitEntity,
  ProjectRequiredMemberEntity,
  ProjectRequiredSkillEntity,
  ProjectResearchEntity,
  ProjectResearchAnswerEntity,
  ProjectReviewEntity,
} from '@project/api/database';

import { ProjectDTO } from './dto/project.dto';
import { ProjectService } from './service/project.service';
import { ProjectResolver } from './resolver/project.resolver';
import { ProjectRepository } from './repo/project.repository';

import { ProjectBookmarkDTO } from './dto/project-bookmark.dto';
import { ProjectBookmarkService } from './service/project-bookmark.service';
import { ProjectBookmarkResolver } from './resolver/project-bookmark.resolver';
import { ProjectBookmarkRepository } from './repo/project-bookmark.repository';

import { ProjectImageDTO } from './dto/project-image.dto';
import { ProjectImageService } from './service/project-image.service';
import { ProjectImageResolver } from './resolver/project-image.resolver';
import { ProjectImageRepository } from './repo/project-image.repository';

import { ProjectKeywordDTO } from './dto/project-keyword.dto';
import { ProjectKeywordService } from './service/project-keyword.service';
import { ProjectKeywordResolver } from './resolver/project-keyword.resolver';
import { ProjectKeywordRepository } from './repo/project-keyword.repository';

import { ProjectMemberDTO } from './dto/project-member.dto';
import { ProjectMemberService } from './service/project-member.service';
import { ProjectMemberResolver } from './resolver/project-member.resolver';
import { ProjectMemberRepository } from './repo/project-member.repository';

import { ProjectMemberOutDTO } from './dto/project-member-out.dto';
import { ProjectMemberOutService } from './service/project-member-out.service';
import { ProjectMemberOutResolver } from './resolver/project-member-out.resolver';
import { ProjectMemberOutRepository } from './repo/project-member-out.repository';

import { ProjectPermitDTO } from './dto/project-permit.dto';
import { ProjectPermitService } from './service/project-permit.service';
import { ProjectPermitResolver } from './resolver/project-permit.resolver';
import { ProjectPermitRepository } from './repo/project-permit.repository';

import { ProjectRequiredMemberDTO } from './dto/project-required-member.dto';
import { ProjectRequiredMemberService } from './service/project-required-member.service';
import { ProjectRequiredMemberResolver } from './resolver/project-required-member.resolver';
import { ProjectRequiredMemberRepository } from './repo/project-required-member.repository';

import { ProjectRequiredSkillDTO } from './dto/project-required-skill.dto';
import { ProjectRequiredSkillService } from './service/project-required-skill.service';
import { ProjectRequiredSkillResolver } from './resolver/project-required-skill.resolver';
import { ProjectRequiredSkillRepository } from './repo/project-required-skill.repository';

import { ProjectResearchDTO } from './dto/project-research.dto';
import { ProjectResearchService } from './service/project-research.service';
import { ProjectResearchResolver } from './resolver/project-research.resolver';
import { ProjectResearchRepository } from './repo/project-research.repository';

import { ProjectResearchAnswerDTO } from './dto/project-research-answer.dto';
import { ProjectResearchAnswerService } from './service/project-research-answer.service';
import { ProjectResearchAnswerResolver } from './resolver/project-research-answer.resolver';
import { ProjectResearchAnswerRepository } from './repo/project-research-answer.repository';

import { ProjectReviewDTO } from './dto/project-review.dto';
import { ProjectReviewService } from './service/project-review.service';
import { ProjectReviewResolver } from './resolver/project-review.resolver';
import { ProjectReviewRepository } from './repo/project-review.repository';

const repositories = [
  ProjectRepository,
  ProjectBookmarkRepository,
  ProjectImageRepository,
  ProjectKeywordRepository,
  ProjectMemberRepository,
  ProjectMemberOutRepository,
  ProjectPermitRepository,
  ProjectRequiredMemberRepository,
  ProjectRequiredSkillRepository,
  ProjectResearchRepository,
  ProjectResearchAnswerRepository,
  ProjectReviewRepository,
];
const entities = [
  ProjectEntity,
  ProjectBookmarkEntity,
  ProjectImageEntity,
  ProjectKeywordEntity,
  ProjectMemberEntity,
  ProjectMemberOutEntity,
  ProjectPermitEntity,
  ProjectRequiredMemberEntity,
  ProjectRequiredSkillEntity,
  ProjectResearchEntity,
  ProjectResearchAnswerEntity,
  ProjectReviewEntity,
];
const reolvers = [
  ProjectResolver,
  ProjectBookmarkResolver,
  ProjectImageResolver,
  ProjectKeywordResolver,
  ProjectMemberResolver,
  ProjectMemberOutResolver,
  ProjectPermitResolver,
  ProjectRequiredMemberResolver,
  ProjectRequiredSkillResolver,
  ProjectResearchResolver,
  ProjectResearchAnswerResolver,
  ProjectReviewResolver,
];
const services = [
  ProjectService,
  ProjectBookmarkService,
  ProjectImageService,
  ProjectKeywordService,
  ProjectMemberService,
  ProjectMemberOutService,
  ProjectPermitService,
  ProjectRequiredMemberService,
  ProjectRequiredSkillService,
  ProjectResearchService,
  ProjectResearchAnswerService,
  ProjectReviewService,
];

const nestjsQueryGraphQLModule = NestjsQueryTypeOrmModule.forFeature([...repositories, ...entities]);

@Module({
  providers: [...reolvers, ...services],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [nestjsQueryGraphQLModule],
      dtos: [
        { DTOClass: ProjectDTO },
        { DTOClass: ProjectBookmarkDTO },
        { DTOClass: ProjectImageDTO },
        { DTOClass: ProjectKeywordDTO },
        { DTOClass: ProjectMemberDTO },
        { DTOClass: ProjectMemberOutDTO },
        { DTOClass: ProjectPermitDTO },
        { DTOClass: ProjectRequiredMemberDTO },
        { DTOClass: ProjectRequiredSkillDTO },
        { DTOClass: ProjectResearchDTO },
        { DTOClass: ProjectResearchAnswerDTO },
        { DTOClass: ProjectReviewDTO },
      ],
    }),
    nestjsQueryGraphQLModule,
  ],
  exports: [nestjsQueryGraphQLModule],
})
export class ProjectModule {}
