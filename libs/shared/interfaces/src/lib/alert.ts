import { AlertType, Flag } from '@project/shared/enum';
import { ICreatedOnlyBase } from './common/base';

export interface IAlertBase {
  userId: string;
  targetUserId: string | null;
  alertType: AlertType;
  projectId: string | null;
  msg: string | null;
  readFlag: Flag;
}
export interface IAlert extends IAlertBase, ICreatedOnlyBase {}

export const FieldsAlertCreate: Readonly<Array<keyof IAlert>> = [
  'userId',
  'targetUserId',
  'alertType',
  'projectId',
  'msg',
  'readFlag',
] as const;

export const FieldsAlertUpdate: Readonly<Array<keyof IAlert>> = [
  'userId',
  'targetUserId',
  'alertType',
  'projectId',
  'msg',
  'readFlag',
] as const;

export type IAlertCreate = Pick<IAlert, typeof FieldsAlertCreate[number]>;
export type IAlertUpdate = Pick<IAlert, typeof FieldsAlertUpdate[number]>;
