import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ApplicationConfigInterface } from './types/services/application.config.interface';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = app.get(ConfigService);
  const appConfig: ApplicationConfigInterface['APP'] = config.get('APP');

  const port = appConfig.SERVER_PORT;

  await app.listen(port, () => {
    Logger.log(`
################################################################### 
####### SAIT-API SERVER START SUCCESS
####### NODE_ENV - ${process.env.NODE_ENV}
####### Apollo Server - http://localhost:${port}/graphql
###################################################################
    `);
  });
}

bootstrap();
