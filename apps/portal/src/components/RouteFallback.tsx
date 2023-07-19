import * as React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

interface RouteFallbackProps {
  title: string;
}

export const RouteFallback: React.FC<RouteFallbackProps> = ({ title }) => (
  <Box display="flex" justifyContent="center" alignItems="center" padding="3rem">
    <CircularProgress color="primary" />
    <Typography color="primary">{title}</Typography>
  </Box>
);
