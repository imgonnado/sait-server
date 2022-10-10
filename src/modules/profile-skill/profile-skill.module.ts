import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ProfileSkillEntity } from '@project/api/database';

import { ProfileSkillDTO } from './dto/profile-skill.dto';
import { ProfileSkillService } from './profile-skill.service';
import { ProfileSkillResolver } from './profile-skill.resolver';
import { ProfileSkillRepository } from './profile-skill.repository';

@Module({
  providers: [ProfileSkillResolver, ProfileSkillService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProfileSkillEntity])],
      dtos: [{ DTOClass: ProfileSkillDTO }],
    }),
    TypeOrmModule.forFeature([ProfileSkillEntity, ProfileSkillRepository]),
  ],
})
export class ProfileSkillModule {}
