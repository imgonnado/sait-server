import { ICreatedOnlyBase } from './common/base';

import { IJobSkill } from './job-skill';

export interface IJobBase {
  jobTitle: string;
  jobCategoryId: string | null;
  jobCode: string | null;
}
export interface IJob extends IJobBase, ICreatedOnlyBase {
  jobSkills: IJobSkill[];
}

export const FieldsJobCreate: Readonly<Array<keyof IJob>> = ['jobTitle', 'jobCategoryId', 'jobCode'] as const;

export const FieldsJobUpdate: Readonly<Array<keyof IJob>> = ['jobTitle', 'jobCategoryId', 'jobCode'] as const;

export type IJobCreate = Pick<IJob, typeof FieldsJobCreate[number]>;
export type IJobUpdate = Pick<IJob, typeof FieldsJobUpdate[number]>;
