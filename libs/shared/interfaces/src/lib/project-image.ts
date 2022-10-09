import { ICreatedOnlyBase } from './common/base';

export interface IProjectImageBase {
  projectId: string;
  image: string;
}
export interface IProjectImage extends IProjectImageBase, ICreatedOnlyBase {}

export const FieldsProjectImageCreate: Readonly<Array<keyof IProjectImage>> = ['projectId', 'image'] as const;

export const FieldsProjectImageUpdate: Readonly<Array<keyof IProjectImage>> = ['projectId', 'image'] as const;

export type IProjectImageCreate = Pick<IProjectImage, typeof FieldsProjectImageCreate[number]>;
export type IProjectImageUpdate = Pick<IProjectImage, typeof FieldsProjectImageUpdate[number]>;
