import * as webpack from 'webpack';
import { getSharedModulesConfig } from '@config/webpack-config/utils';
import { CommonModuleFederationConfig } from '@config/webpack-config/types';
import { Apps } from '@config/webpack-config/enums';
import {
  getAppModuleFederationConfig,
  getDtsModuleConfig,
} from '@config/webpack-config/module-federation';
import CopyPlugin from 'copy-webpack-plugin';
import { dependencies } from '../package.json';

export const getCommonModuleFederationConfig = (): CommonModuleFederationConfig => ({
  ...getAppModuleFederationConfig(Apps.Portal).baseConfig,
  shared: getSharedModulesConfig(dependencies),
});

export default (): webpack.Configuration => ({
  module: {
    rules: [getDtsModuleConfig(Apps.Portal)],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './public/manifest.json', to: './manifest.json' }],
    }),
  ],
});
