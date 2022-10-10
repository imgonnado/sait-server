/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ApplicationConfigInterface } from '~/types/services/application.config.interface';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  private readonly DATABASE_CONFIG: ApplicationConfigInterface['DATABASE'];
  private readonly IS_DEVELOPMENT: ApplicationConfigInterface['APP']['IS_DEVELOPMENT'];
  constructor(private readonly configService: ConfigService<ApplicationConfigInterface>) {
    this.DATABASE_CONFIG = this.configService.get('DATABASE');
    this.IS_DEVELOPMENT = this.configService.get('APP').IS_DEVELOPMENT;
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.DATABASE_CONFIG.TYPE,
      host: this.DATABASE_CONFIG.HOST,
      port: this.DATABASE_CONFIG.PORT,
      timezone: 'Asia/Seoul',
      username: this.DATABASE_CONFIG.USERNAME,
      password: this.DATABASE_CONFIG.PASSWORD,
      database: this.DATABASE_CONFIG.DATABASE,
      namingStrategy: new SnakeNamingStrategy(),
      autoLoadEntities: true,
      synchronize: this.DATABASE_CONFIG.SYNCHRONIZE ?? false,
      logging: this.IS_DEVELOPMENT,
      keepConnectionAlive: true,
    };
  }
}
