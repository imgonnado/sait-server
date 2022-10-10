import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ProfileCareerEntity } from '@project/api/database';

import { ProfileCareerDTO } from './dto/profile-career.dto';
import { ProfileCareerService } from './profile-career.service';
import { ProfileCareerResolver } from './profile-career.resolver';
import { ProfileCareerRepository } from './profile-career.repository';

@Module({
  providers: [ProfileCareerResolver, ProfileCareerService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProfileCareerEntity])],
      dtos: [{ DTOClass: ProfileCareerDTO }],
    }),
    TypeOrmModule.forFeature([ProfileCareerEntity, ProfileCareerRepository]),
  ],
})
export class ProfileCareerModule {}
