import { ApplicationConfigInterface } from './types/services/application.config.interface';
import merge from 'deepmerge';

export const InitAppConfig = async (): Promise<ApplicationConfigInterface> => {
  const defaultEnv = process.env.NODE_ENV || 'development';
  let { config }: { config: ApplicationConfigInterface } = await import(`./config/envs/${defaultEnv}.env`);

  if (defaultEnv == 'development') {
    try {
      const { config: localConfig } = await require(`./config/envs/local.env`);
      if (localConfig) {
        config = merge(config, localConfig);
      }
    } catch (e) {
      // console.log('not found ', e);
    }
  }

  return config;
};
