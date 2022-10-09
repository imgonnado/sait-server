import { ICreatedOnlyBase } from './common/base';

export interface IProjectRequiredMemberBase {
  projectId: string;
  jobId: string | null;
  jobCount: number | null;
}
export interface IProjectRequiredMember extends IProjectRequiredMemberBase, ICreatedOnlyBase {}

export const FieldsProjectRequiredMemberCreate: Readonly<Array<keyof IProjectRequiredMember>> = [
  'projectId',
  'jobId',
  'jobCount'
] as const;

export const FieldsProjectRequiredMemberUpdate: Readonly<Array<keyof IProjectRequiredMember>> = [
  'projectId',
  'jobId',
  'jobCount'
] as const;

export type IProjectRequiredMemberCreate = Pick<
  IProjectRequiredMember,
  typeof FieldsProjectRequiredMemberCreate[number]
>;
export type IProjectRequiredMemberUpdate = Pick<
  IProjectRequiredMember,
  typeof FieldsProjectRequiredMemberUpdate[number]
>;
