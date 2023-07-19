import { Apps } from './enums';
import { AppsModuleFederationConfig, AppModuleFederationConfig } from './types';

const hostBaseUrl = process.env.HOST_BASE_URL || '/';
const remoteEntryFile = 'remoteEntry.js';

const appsModuleFederationConfig: AppsModuleFederationConfig = {
  [Apps.Portal]: {
    devPort: 3000,
    analyzerPort: 4000,
    baseConfig: {
      name: 'portal',
      filename: remoteEntryFile,
    },
    // New apps or shared entries should be added here ❗️
    remotes: {
      dev: {
        shared: `shared@http://localhost:3001/${remoteEntryFile}`,
        nested: `nested@http://localhost:3002/${remoteEntryFile}`,
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/${remoteEntryFile}`,
        nested: `nested@${hostBaseUrl}apps/nested/dist/${remoteEntryFile}`,
      },
    },
  },
  [Apps.Shared]: {
    devPort: 3001,
    analyzerPort: 4001,
    baseConfig: {
      name: 'shared',
      filename: remoteEntryFile,
      exposes: {
        // New exposed components should be added here ❗️
        './stores/theme': './src/stores/theme',
        './stores/meme-history': './src/stores/meme-history',
      },
    },
  },
  [Apps.Nested]: {
    devPort: 3002,
    analyzerPort: 4002,
    baseConfig: {
      name: 'nested',
      filename: remoteEntryFile,
      exposes: {
        // Exposing only root in here
        './NestedApp': './src/NestedApp',
      },
    },
    remotes: {
      dev: {
        shared: `shared@http://localhost:3001/${remoteEntryFile}`,
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/${remoteEntryFile}`,
      },
    },
  },
};

export const getAppModuleFederationConfig = (appName: Apps): AppModuleFederationConfig =>
  appsModuleFederationConfig[appName];

export const getDtsModuleConfig = (appName: Apps) => ({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'dts-loader',
      options: {
        name: getAppModuleFederationConfig(appName).baseConfig.name,
        exposes: getAppModuleFederationConfig(appName).baseConfig.exposes,
        typesOutputDir: '.wp_federation',
      },
    },
  ],
});
