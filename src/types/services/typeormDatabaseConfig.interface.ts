export declare type TypeOrmDbDialect = 'mysql';
export declare interface TypeormDatabaseConfigInterface {
  TYPE: TypeOrmDbDialect;
  HOST: string;
  PORT: number;
  USERNAME: string;
  PASSWORD: string;
  DATABASE: string;
}
