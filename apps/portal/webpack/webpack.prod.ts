import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import { Apps } from '@config/webpack-config/enums';
import { getAppModuleFederationConfig } from '@config/webpack-config/module-federation';
import { getBundleAnalyzerPlugin } from '@config/webpack-config/utils';
import getProdCommonConfig from '@config/webpack-config/webpack.prod';

import getCommonConfig, { getCommonModuleFederationConfig } from './webpack.common';

export default (env: Record<string, string | boolean>): webpack.Configuration => {
  return merge(getProdCommonConfig(), getCommonConfig(), {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        ...getCommonModuleFederationConfig(),
        remotes: getAppModuleFederationConfig(Apps.Portal).remotes?.prod,
      }),
      ...(env.analyze ? [getBundleAnalyzerPlugin(Apps.Portal)] : []),
    ],
  });
};
