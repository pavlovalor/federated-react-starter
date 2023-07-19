import * as React from 'react';
import * as Pages from './pages';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Tabs, Tab, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Box } from '@mui/material';

const queryClient = new QueryClient();

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (const pattern of patterns) if (pathname.endsWith(pattern)) return pattern;
  return null;
}

const NestedApp: React.FC = () => {
  const routeMatch = useRouteMatch(['random', 'history']);

  return (
    <QueryClientProvider client={queryClient}>
      <Box padding="2rem">
        <Helmet>
          <title>Memes section</title>
        </Helmet>

        <Typography color="textPrimary" component="h1" variant="h5">
          Meme ranking app
        </Typography>

        <Box paddingX="1rem">
          <Tabs value={routeMatch} aria-label="sub-app navigation">
            <Tab label="Random meme" value="random" component={Link} to="random" />
            <Tab label="History" value="history" component={Link} to="history" />
          </Tabs>
        </Box>

        <Routes>
          <Route path="random" element={<Pages.RandomMeme />} />
          <Route path="history" element={<Pages.History />} />
          <Route path="/" element={<Navigate replace to="random" />} />
        </Routes>
      </Box>
    </QueryClientProvider>
  );
};

export default NestedApp;
