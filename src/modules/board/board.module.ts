import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { BoardEntity } from '@project/api/database';

import { BoardDTO } from './dto/board.dto';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';
import { BoardRepository } from './board.repository';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BoardEntity])],
      dtos: [{ DTOClass: BoardDTO }],
    }),
    NestjsQueryTypeOrmModule.forFeature([BoardEntity]),
  ],
  providers: [BoardResolver, BoardService, BoardRepository],
})
export default class BoardModule {}
