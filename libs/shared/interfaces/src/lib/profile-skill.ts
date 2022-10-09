import { ICreatedOnlyBase } from './common/base';

export interface IProfileSkillBase {
  profileId: string;
  jobSkillId: string;
}
export interface IProfileSkill extends IProfileSkillBase, ICreatedOnlyBase {}

export const FieldsProfileSkillCreate: Readonly<Array<keyof IProfileSkill>> = ['profileId', 'jobSkillId'] as const;

export const FieldsProfileSkillUpdate: Readonly<Array<keyof IProfileSkill>> = ['profileId', 'jobSkillId'] as const;

export type IProfileSkillCreate = Pick<IProfileSkill, typeof FieldsProfileSkillCreate[number]>;
export type IProfileSkillUpdate = Pick<IProfileSkill, typeof FieldsProfileSkillUpdate[number]>;
