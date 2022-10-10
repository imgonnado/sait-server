import { BoardEntity } from '@project/api/database';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Resolver } from '@nestjs/graphql';

import { BoardService } from './board.service';
import { BoardDTO } from './dto/board.dto';
import { CreateBoardInput, UpdateBoardInput } from './dto/board.input';

@Resolver(() => BoardDTO)
export class BoardResolver extends CRUDResolver(BoardDTO, {
  //create: { disabled: true },
  //update: { disabled: true },
  //delete: { disabled: true },
  create: { CreateDTOClass: CreateBoardInput, many: { disabled: true } },
  update: { UpdateDTOClass: UpdateBoardInput, many: { disabled: true } },
  delete: { many: { disabled: true } },
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
}) {
  constructor(
    @InjectQueryService(BoardEntity)
    readonly service: QueryService<BoardEntity>,
    private boardService: BoardService,
  ) {
    super(service);
  }

  //@Mutation(() => BaseResponse)
  //async updateBoard(
  //  @Args('id', { type: () => ID }) id: string,
  //  @Args('input') updateBoardInput: UpdateBoardInput
  //): Promise<BaseResponse> {
  //  console.log('@@@@', updateBoardInput);
  //
  //  this.boardService.update(id, updateBoardInput);
  //  return new BaseResponse();
  //}
}
