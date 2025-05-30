/* eslint-disable ts/consistent-type-definitions */
namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly DATABASE_URL: string;
  }
}
