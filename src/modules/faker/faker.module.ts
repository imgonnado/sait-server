/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity, UserEntity } from '@project/api/database';
import { FakerController } from './faker.controller';
import { FakerService } from './faker.service';
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ProjectEntity])],
  controllers: [FakerController],
  providers: [FakerService],
  // exports: [UserRepository],
})
export class FakerModule {}
