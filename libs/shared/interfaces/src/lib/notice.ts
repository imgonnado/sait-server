import { BoardCategoryType } from '@project/shared/enum';
import { ICreatedOnlyBase } from './common/base';

export interface INoticeBase {
  category: BoardCategoryType;
  subject: string | null;
  content: string | null;
  adminuserId: string;
}
export interface INotice extends INoticeBase, ICreatedOnlyBase {}

export const FieldsNoticeCreate: Readonly<Array<keyof INotice>> = [
  'category',
  'subject',
  'content',
  'adminuserId',
] as const;

export const FieldsNoticeUpdate: Readonly<Array<keyof INotice>> = [
  'category',
  'subject',
  'content',
  'adminuserId',
] as const;

export type INoticeCreate = Pick<INotice, typeof FieldsNoticeCreate[number]>;
export type INoticeUpdate = Pick<INotice, typeof FieldsNoticeUpdate[number]>;
