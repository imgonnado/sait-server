import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AdminuserEntity } from '@project/api/database';

import { AdminuserDTO } from './dto/adminuser.dto';
import { AdminuserService } from './adminuser.service';
import { AdminuserResolver } from './adminuser.resolver';
import { AdminuserRepository } from './adminuser.repository';

const nestjsQueryGraphQLModule = NestjsQueryTypeOrmModule.forFeature([AdminuserEntity, AdminuserRepository]);

@Module({
  providers: [AdminuserResolver, AdminuserService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [nestjsQueryGraphQLModule],
      dtos: [{ DTOClass: AdminuserDTO }],
    }),
    nestjsQueryGraphQLModule,
  ],
  exports: [nestjsQueryGraphQLModule],
})
export class AdminuserModule {}
