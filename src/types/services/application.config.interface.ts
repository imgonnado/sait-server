import { TypeormDatabaseConfigInterface } from './typeormDatabaseConfig.interface';

declare type StaticOrigin = boolean | string | RegExp | (string | RegExp)[];
type SOCIAL_AUTH = {
  CLIENT_ID: string;
  CLIENT_SECRET?: string;
  CALLBACK_URL: string;
};
export interface AuthInfo {
  KEY: string;
  APP_SECRET: string;
  EXPIRE: string;
  DOMAIN?: string;
}
export interface ApplicationConfigInterface {
  DEBUG: boolean;
  DEV?: {
    NAME: string;
  };
  APP: {
    SERVER_PORT: number;
    APP_NAME: string;
    IS_DEVELOPMENT: boolean;
    IS_PRODUCTION: boolean;
    NODE_ENV?: string;
    ROOT_FOLDER_PATH: string;
  };
  API: {
    API_PREFIX: string;
    GRAPHQL_API_PREFIX: string;
    VERSION: string;
    CROS: StaticOrigin;
  };
  AUTH: {
    TEMP_ACCESS_TOKEN?: AuthInfo;
    ACCESS_TOKEN: AuthInfo;
    B2BC_ACCESS_TOKEN?: AuthInfo;
    REFRESH_TOKEN?: AuthInfo;
    B2B_ACCESS_TOKEN?: AuthInfo;
  };
  DOMAIN: {
    COMMERCE: string;
  };
  DATABASE: TypeormDatabaseConfigInterface;
  AZURE: {
    STORAGE: {
      BASE_URL: string;
      CONNECTION: string;
    };
    ASSETS: {
      BASE_URL: string;
    };
    SENDGRID: {
      API_KEY: string;
    };
  };
  EXTERNAL_AUTH?: {
    KAKAO: SOCIAL_AUTH;
    NAVER: SOCIAL_AUTH;
    GOOGLE: SOCIAL_AUTH;
    FACEBOOK: SOCIAL_AUTH;
  };
  NOTIFICATION: {
    KAKAO: {
      PLUS_FRIEND_ID: string;
      DOMAIN: string;
      APP_KEY: string;
      SECRET_KEY: string;
      ALIMTALK: {
        API_PREFIX: string;
        API: {
          MESSAGES: string;
        };
      };
    };
    SLACK: {
      WEB_HOOK_URLS: {
        QNA: string;
        BAD: string;
        BTE: string;
        BARCODE: string;
      };
    };
  };
  FIREBASE: {
    API_KEY: string;
    URLS: {
      DYNAMIC_LINKS: string;
    };
  };
  SLACK: {
    TOKEN: string;
  };
}

export interface ServiceConfigInterface {
  EXTERNALS: {
    WEB_SERVER: ExternalServer;
  };
}

export interface ExternalServer {
  SERVER: string;
}
