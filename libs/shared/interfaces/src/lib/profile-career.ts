import { ICreatedOnlyBase } from './common/base';

export interface IProfileCareerBase {
  profileId: string;
  title: string;
  careerMonths: number | null;
  description: string | null;
  urls: JSON;
}
export interface IProfileCareer extends IProfileCareerBase, ICreatedOnlyBase {}

export const FieldsProfileCareerCreate: Readonly<Array<keyof IProfileCareer>> = [
  'profileId',
  'title',
  'careerMonths',
  'description',
  'urls',
] as const;

export const FieldsProfileCareerUpdate: Readonly<Array<keyof IProfileCareer>> = [
  'profileId',
  'title',
  'careerMonths',
  'description',
  'urls',
] as const;

export type IProfileCareerCreate = Pick<IProfileCareer, typeof FieldsProfileCareerCreate[number]>;
export type IProfileCareerUpdate = Pick<IProfileCareer, typeof FieldsProfileCareerUpdate[number]>;
