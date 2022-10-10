import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AlertEntity } from '@project/api/database';

import { AlertDTO } from './dto/alert.dto';
import { AlertService } from './alert.service';
import { AlertResolver } from './alert.resolver';
import { AlertRepository } from './alert.repository';

@Module({
  providers: [AlertResolver, AlertService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AlertEntity])],
      dtos: [{ DTOClass: AlertDTO }],
    }),
    TypeOrmModule.forFeature([AlertEntity, AlertRepository]),
  ],
})
export class AlertModule {}
