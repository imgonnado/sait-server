import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { UserInterestKeywordEntity } from '@project/api/database';

import { UserInterestKeywordDTO } from './dto/user-interest-keyword.dto';
import { UserInterestKeywordService } from './user-interest-keyword.service';
import { UserInterestKeywordResolver } from './user-interest-keyword.resolver';
import { UserInterestKeywordRepository } from './user-interest-keyword.repository';

@Module({
  providers: [UserInterestKeywordResolver, UserInterestKeywordService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserInterestKeywordEntity])],
      dtos: [{ DTOClass: UserInterestKeywordDTO }],
    }),
    NestjsQueryTypeOrmModule.forFeature([UserInterestKeywordEntity, UserInterestKeywordRepository]),
  ],
})
export class UserInterestKeywordModule {}
