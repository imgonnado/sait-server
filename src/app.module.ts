/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './db/databaseConnection.config';
import { InitAppConfig } from './app.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [InitAppConfig],
      cache: false,
      ignoreEnvFile: true,
    }),
    TypeOrmModule.forRootAsync({ useClass: DatabaseConfig })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
