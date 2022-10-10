import * as path from 'path';
import { ApplicationConfigInterface } from '~/types/services/application.config.interface';

export const config: ApplicationConfigInterface = {
  DEBUG: true,
  APP: {
    APP_NAME: 'SAIT API',
    SERVER_PORT: 4000,
    IS_DEVELOPMENT: true,
    IS_PRODUCTION: false,
    NODE_ENV: process.env.NODE_ENV,
    ROOT_FOLDER_PATH: path.join(__dirname, '...'),
  },
  DATABASE: {
    TYPE: 'mysql',
    HOST: 'misookhe.iptime.org',
    PORT: 13306,
    USERNAME: 'root',
    PASSWORD: 'pwd1234',
    DATABASE: 'sait_test',
  },
};
