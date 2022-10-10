import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ProfileEntity } from '@project/api/database';

import { ProfileDTO } from './dto/profile.dto';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';
import { ProfileRepository } from './profile.repository';

@Module({
  providers: [ProfileResolver, ProfileService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProfileEntity])],
      dtos: [{ DTOClass: ProfileDTO }],
    }),
    NestjsQueryTypeOrmModule.forFeature([ProfileEntity, ProfileRepository]),
  ],
})
export class ProfileModule {}
