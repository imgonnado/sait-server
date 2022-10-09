import { ICreatedOnlyBase } from './common/base';

export interface IProjectKeywordBase {
  projectId: string;
  keyword: string;
}
export interface IProjectKeyword extends IProjectKeywordBase, ICreatedOnlyBase {}

export const FieldsProjectKeywordCreate: Readonly<Array<keyof IProjectKeyword>> = ['projectId', 'keyword'] as const;

export const FieldsProjectKeywordUpdate: Readonly<Array<keyof IProjectKeyword>> = ['projectId', 'keyword'] as const;

export type IProjectKeywordCreate = Pick<IProjectKeyword, typeof FieldsProjectKeywordCreate[number]>;
export type IProjectKeywordUpdate = Pick<IProjectKeyword, typeof FieldsProjectKeywordUpdate[number]>;
