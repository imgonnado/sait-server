import { IDeletableBase } from './common/base';

export interface IBoardBase {
  seq: number;
  reply: string;
  parent: number;
  comment: number;
  subject: string;
  content: string;
  hitCnt: number;
  goodCnt: number;
  nogoodCnt: number;
  memId: string;
  password: string;
  name: string;
}
export interface IBoard extends IBoardBase, IDeletableBase {
  //
}

export const FieldsBoardCreate: Readonly<Array<keyof IBoardBase>> = [
  'seq',
  'reply',
  'parent',
  'comment',
  'subject',
  'content',
  'hitCnt',
  'goodCnt',
  'nogoodCnt',
  'memId',
  'password',
  'name',
] as const;

export const FieldsBoardUpdate: Readonly<Array<keyof IBoardBase>> = [
  'seq',
  'reply',
  'parent',
  'comment',
  'subject',
  'content',
  'hitCnt',
  'goodCnt',
  'nogoodCnt',
  'memId',
  'password',
  'name',
] as const;

export type IBoardCreate = Pick<IBoardBase, typeof FieldsBoardCreate[number]>;
export type IBoardUpdate = Pick<IBoardBase, typeof FieldsBoardUpdate[number]>;
