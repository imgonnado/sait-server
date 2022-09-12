import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'user_no' })
  userNo: number;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 50 })
  password: string;

  @Column({ length: 50 })
  salt: string;

  @Column({ length: 50 })
  displayName: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 50 })
  phone: string;
}
