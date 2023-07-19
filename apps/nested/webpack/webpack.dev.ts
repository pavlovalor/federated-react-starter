import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import { Apps } from '@config/webpack-config/enums';
import { getAppModuleFederationConfig } from '@config/webpack-config/module-federation';
import getDevCommonConfig from '@config/webpack-config/webpack.dev';

import getCommonConfig, { getCommonModuleFederationConfig } from './webpack.common';

export default (): webpack.Configuration =>
  merge(
    getDevCommonConfig({ port: getAppModuleFederationConfig(Apps.Nested).devPort }),
    getCommonConfig(),
    {
      plugins: [
        new webpack.container.ModuleFederationPlugin({
          ...getCommonModuleFederationConfig(),
          remotes: getAppModuleFederationConfig(Apps.Nested).remotes?.dev,
        }),
      ],
    }
  );
