import { ICreatedOnlyBase } from './common/base';

export interface IProjectReviewBase {
  projectId: string;
  userId: string;
  targetUserId: string | null;
  feedback: string | null;
  score: number;
}
export interface IProjectReview extends IProjectReviewBase, ICreatedOnlyBase {}

export const FieldsProjectReviewCreate: Readonly<Array<keyof IProjectReview>> = [
  'projectId',
  'userId',
  'targetUserId',
  'feedback',
  'score'
] as const;

export const FieldsProjectReviewUpdate: Readonly<Array<keyof IProjectReview>> = [
  'projectId',
  'userId',
  'targetUserId',
  'feedback',
  'score'
] as const;

export type IProjectReviewCreate = Pick<IProjectReview, typeof FieldsProjectReviewCreate[number]>;
export type IProjectReviewUpdate = Pick<IProjectReview, typeof FieldsProjectReviewUpdate[number]>;
