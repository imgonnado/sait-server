import { Injectable } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { UpdateBoardInput } from './dto/board.input';

@Injectable()
export class BoardService {
  constructor(private boardRepository: BoardRepository) {}

  // async update(id: string, node: UpdateBoardInput): Promise<void> {
  //  const data = (await this.boardRepository.findOne(id)) || this.boardRepository.create();
  //  const res = await this.boardRepository.save({ ...data, ...node });
  // }
}
