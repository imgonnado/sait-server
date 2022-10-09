import { ICreatedOnlyBase } from './common/base';

export interface IProjectHitBase {
  projectId: string;
  userId: string | null;
}
export interface IProjectHit extends IProjectHitBase, ICreatedOnlyBase {}

export const FieldsProjectHitCreate: Readonly<Array<keyof IProjectHit>> = ['projectId', 'userId'] as const;

export const FieldsProjectHitUpdate: Readonly<Array<keyof IProjectHit>> = ['projectId', 'userId'] as const;

export type IProjectHitCreate = Pick<IProjectHit, typeof FieldsProjectHitCreate[number]>;
export type IProjectHitUpdate = Pick<IProjectHit, typeof FieldsProjectHitUpdate[number]>;
