import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AdminuserEntity } from '@project/api/database';

import { AdminuserDTO } from './dto/adminuser.dto';
import { AdminuserService } from './adminuser.service';
import { AdminuserResolver } from './adminuser.resolver';
import { AdminuserRepository } from './adminuser.repository';

@Module({
  providers: [AdminuserResolver, AdminuserService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AdminuserEntity])],
      dtos: [{ DTOClass: AdminuserDTO }],
    }),
    TypeOrmModule.forFeature([AdminuserEntity, AdminuserRepository]),
  ],
})
export class AdminuserModule {}
