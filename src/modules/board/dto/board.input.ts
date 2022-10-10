import { FieldsBoardCreate, FieldsBoardUpdate, IBoardBase, IDeletableBase } from '@project/shared/interfaces';
import { InputType, PickType } from '@nestjs/graphql';
import { BoardDTO } from './board.dto';

@InputType({ isAbstract: true })
class MutaionBoardBase extends BoardDTO implements IBoardBase, IDeletableBase {}

@InputType()
export class CreateBoardInput extends PickType(MutaionBoardBase, FieldsBoardCreate, InputType) {}

@InputType()
export class UpdateBoardInput extends PickType(MutaionBoardBase, FieldsBoardUpdate, InputType) {}
