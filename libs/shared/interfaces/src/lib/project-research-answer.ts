import { ICreatedOnlyBase } from './common/base';

export interface IProjectResearchAnswerBase {
  projectResearchId: string;
  userId: string;
  answer: string | null;
}
export interface IProjectResearchAnswer extends IProjectResearchAnswerBase, ICreatedOnlyBase {}

export const FieldsProjectResearchAnswerCreate: Readonly<Array<keyof IProjectResearchAnswer>> = [
  'projectResearchId',
  'userId',
  'answer',
] as const;

export const FieldsProjectResearchAnswerUpdate: Readonly<Array<keyof IProjectResearchAnswer>> = [
  'projectResearchId',
  'userId',
  'answer',
] as const;

export type IProjectResearchAnswerCreate = Pick<
  IProjectResearchAnswer,
  typeof FieldsProjectResearchAnswerCreate[number]
>;
export type IProjectResearchAnswerUpdate = Pick<
  IProjectResearchAnswer,
  typeof FieldsProjectResearchAnswerUpdate[number]
>;
