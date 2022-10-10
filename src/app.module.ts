/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './db/databaseConnection.config';
import { InitAppConfig } from './app.config';
import { ProjectModule } from './modules/project/project.module';
import { AdminuserModule } from './modules/adminuser/adminuser.module';
import { AlertModule } from './modules/alert/alert.module';
import { JobModule } from './modules/job/job.module';
import { JobCategoryModule } from './modules/job-category/job-category.module';
import { JobSkillModule } from './modules/job-skill/job-skill.module';
import { NoticeModule } from './modules/notice/notice.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ProfileCareerModule } from './modules/profile-career/profile-career.module';
import { ProfileSkillModule } from './modules/profile-skill/profile-skill.module';
import { UserModule } from './modules/user/user.module';
import { UserInterestKeywordModule } from './modules/user-interest-keyword/user-interest-keyword.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [InitAppConfig],
      cache: false,
      ignoreEnvFile: true,
    }),
    TypeOrmModule.forRootAsync({ useClass: DatabaseConfig }),
    AdminuserModule,
    AlertModule,
    JobModule,
    JobCategoryModule,
    JobSkillModule,
    NoticeModule,
    ProfileModule,
    ProfileCareerModule,
    ProfileSkillModule,
    UserModule,
    UserInterestKeywordModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
