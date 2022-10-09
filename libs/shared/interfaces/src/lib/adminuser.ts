import { ICreatedOnlyBase } from './common/base';

import { INotice } from './notice';

export interface IAdminuserBase {
  name: string;
  nickname: string | null;
  email: string;
  password: string;
  loginType: number | null;
  image: string | null;
}
export interface IAdminuser extends IAdminuserBase, ICreatedOnlyBase {
  notices: INotice[];
}

export const FieldsAdminuserCreate: Readonly<Array<keyof IAdminuser>> = [
  'name',
  'nickname',
  'email',
  'password',
  'loginType',
  'image'
] as const;

export const FieldsAdminuserUpdate: Readonly<Array<keyof IAdminuser>> = [
  'name',
  'nickname',
  'email',
  'password',
  'loginType',
  'image'
] as const;

export type IAdminuserCreate = Pick<IAdminuser, typeof FieldsAdminuserCreate[number]>;
export type IAdminuserUpdate = Pick<IAdminuser, typeof FieldsAdminuserUpdate[number]>;
