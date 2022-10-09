import { TypeormDatabaseConfigInterface } from './typeormDatabaseConfig.interface';

export interface ApplicationConfigInterface {
  DEBUG: boolean;
  APP: {
    SERVER_PORT: number;
    APP_NAME: string;
    IS_DEVELOPMENT: boolean;
    NODE_ENV: any;
    IS_PRODUCTION: boolean;
    ROOT_FOLDER_PATH: string;
  };

  DATABASE: TypeormDatabaseConfigInterface;
}
