import { ApplicationConfigInterface } from '~/types/services/application.config.interface';
import * as path from 'path';

export const config: ApplicationConfigInterface = {
  DEBUG: true,
  APP: {
    APP_NAME: 'Admin API',
    SERVER_PORT: 3333,
    IS_DEVELOPMENT: true,
    IS_PRODUCTION: false,
    NODE_ENV: process.env.NODE_ENV,
    ROOT_FOLDER_PATH: path.join(__dirname, '...'),
  },
  API: {
    API_PREFIX: 'api',
    GRAPHQL_API_PREFIX: 'gql',
    VERSION: 'v1',
    CROS: ['http://localhost', 'http://192.168.0.135'],
  },
  AUTH: {
    ACCESS_TOKEN: {
      KEY: 'admin_access_token',
      EXPIRE: '100d',
      APP_SECRET: 'ciw@ie2',
    },
  },
  DOMAIN: {
    COMMERCE: 'http://localhost:5200',
  },
  DATABASE: {
    TYPE: 'mysql',
    HOST: '',
    PORT: 3306,
    USERNAME: '',
    PASSWORD: '',
    DATABASE: '',
    SYNCHRONIZE: false,
  },
  AZURE: {
    STORAGE: {
      BASE_URL: 'https://devdev.blob.core.windows.net/',
      CONNECTION: '',
    },
    ASSETS: {
      BASE_URL: 'https://devdev.blob.core.windows.net/',
    },
    SENDGRID: {
      API_KEY: 'SG.4TtKm4BJRMCiuTTkVY4O-Q.cwN3fOnIzzzzzzzzzzzzzzz',
    },
  },
  NOTIFICATION: {
    KAKAO: {
      PLUS_FRIEND_ID: '@',
      DOMAIN: 'https://api-alimtalk.cloud.toast.com',
      APP_KEY: 'W',
      SECRET_KEY: 'l4',
      ALIMTALK: {
        API_PREFIX: '/alimtalk/v1.5/appkeys/',
        API: {
          MESSAGES: '/messages',
        },
      },
    },
    SLACK: {
      WEB_HOOK_URLS: {
        QNA: 'https://hooks.slack.com/services/TK4PE9WNT/B01FC7R/',
        BAD: 'https://hooks.slack.com/services/TK4PE9WNT/B020E76H/',
        BTE: 'https://hooks.slack.com/services/TK4PE9WNT/B01HM/',
        BARCODE: 'https://hooks.slack.com/services/TK4PE9WNT/B02A6AM5',
      },
    },
  },
  FIREBASE: {
    API_KEY: '',
    URLS: {
      DYNAMIC_LINKS: 'https://firebasedynamiclinks.googleapis.com/v1/shortLinks',
    },
  },
  SLACK: {
    TOKEN: 'xoxb-650796336775-331J',
  },
};
