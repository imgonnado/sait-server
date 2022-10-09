import { ApplicationConfigInterface } from './types/services/application.config.interface';

export const InitAppConfig = async (): Promise<ApplicationConfigInterface> => {
  const { config }: { config: ApplicationConfigInterface } = await import(
    // `./envs/${process.env.NODE_ENV || 'local'}.env`
    `./config/envs/local.env`
  );
  return config;
};
