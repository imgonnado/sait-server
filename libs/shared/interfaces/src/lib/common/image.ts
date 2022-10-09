import { IDeletableBase } from './base';

export interface IImageBase {
  url: string;
  path?: string;
  alert?: string;
  priority?: number;
}
export interface IImage extends IImageBase, IDeletableBase {}

export const FieldsImageUpdate: Readonly<Array<keyof IImage>> = ['id', 'url', 'path', 'alert', 'priority'] as const;
export type IImageUpdate = Pick<IImage, typeof FieldsImageUpdate[number]>;

export const FieldsImageCreate: Readonly<Array<keyof IImage>> = ['id', 'url', 'path', 'alert', 'priority'] as const;
export type IImageCreate = Pick<IImage, typeof FieldsImageCreate[number]>;
