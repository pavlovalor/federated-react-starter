import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import { Apps } from '@config/webpack-config/enums';
import { getAppModuleFederationConfig } from '@config/webpack-config/module-federation';
import getDevCommonConfig from '@config/webpack-config/webpack.dev';

import getCommonConfig from './webpack.common';

export default (): webpack.Configuration =>
  merge(
    getDevCommonConfig({ port: getAppModuleFederationConfig(Apps.Shared).devPort }),
    getCommonConfig()
  );
