import * as React from 'react';
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import { Divider, Grid } from '@mui/material';
import { ArrowDownwardSharp } from '@mui/icons-material';

import * as Components from './components';
import { Typography } from '@mui/material';

/**
 * if safe import is needed (in case of remote bundle loading fails)
 * consider using FederatedBoundary https://github.com/module-federation/universe/tree/main/packages/utilities#react-utilities
 */
const NestedApp = React.lazy(() => import('nested/NestedApp'));

const App: React.FC = () => {
  // const { count } = useCountStore();
  // const { data, status } = useFilms();

  return (
    <Components.ThemeProvider>
      <Grid container columns={3}>
        <Grid item xs="auto" height="100dvh">
          <Components.Navigation />
        </Grid>

        <Grid item xs="auto">
          <Divider orientation="vertical" />
        </Grid>

        <Grid item xs>
          <Components.TopBar />
          <Divider orientation="horizontal" textAlign="left">
            <Typography variant="caption" color="textSecondary">
              <ArrowDownwardSharp sx={{ fontSize: 14, margin: '0 .5rem -.2rem 0' }} color="info" />
              ROOT AREA
            </Typography>
          </Divider>
          <Components.RootArea />
          <Divider orientation="horizontal" textAlign="left">
            <Typography variant="caption" color="textSecondary">
              <ArrowDownwardSharp
                sx={{ fontSize: 14, margin: '0 .5rem -.2rem 0' }}
                color="warning"
              />
              ROUTE AREA
            </Typography>
          </Divider>

          <Routes>
            <Route
              path="/memes/*"
              element={
                <React.Suspense fallback={<Components.RouteFallback title="Loading memes app" />}>
                  <NestedApp />
                </React.Suspense>
              }
            />
            <Route path="/" element={<Pages.Root />} />
          </Routes>
        </Grid>
      </Grid>
    </Components.ThemeProvider>
  );
};

export default App;
