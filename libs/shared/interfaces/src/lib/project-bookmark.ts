import { ICreatedOnlyBase } from './common/base';

export interface IProjectBookmarkBase {
  projectId: string;
  userId: string | null;
}
export interface IProjectBookmark extends IProjectBookmarkBase, ICreatedOnlyBase {}

export const FieldsProjectBookmarkCreate: Readonly<Array<keyof IProjectBookmark>> = ['projectId', 'userId'] as const;

export const FieldsProjectBookmarkUpdate: Readonly<Array<keyof IProjectBookmark>> = ['projectId', 'userId'] as const;

export type IProjectBookmarkCreate = Pick<IProjectBookmark, typeof FieldsProjectBookmarkCreate[number]>;
export type IProjectBookmarkUpdate = Pick<IProjectBookmark, typeof FieldsProjectBookmarkUpdate[number]>;
