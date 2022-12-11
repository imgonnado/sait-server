import { ICreatedOnlyBase } from './common/base';

export interface IProjectImageBase {
  image: string;
}
export interface IProjectImage extends IProjectImageBase, ICreatedOnlyBase {}

export const FieldsProjectImageCreate: Readonly<Array<keyof IProjectImage>> = ['image'] as const;

export const FieldsProjectImageUpdate: Readonly<Array<keyof IProjectImage>> = ['image'] as const;

export interface IProjectImageCreate extends Pick<IProjectImage, typeof FieldsProjectImageCreate[number]> {}
export interface IProjectImageUpdate extends Pick<IProjectImage, typeof FieldsProjectImageUpdate[number]> {}
