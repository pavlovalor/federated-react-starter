import * as React from 'react';
import { Stack, Box, Divider, Typography, Link, Tooltip } from '@mui/material';
import { GpsNotFixed, GpsFixed } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <Box>
      <Box
        height="4.22rem"
        paddingX="1rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography color="textPrimary" variant="h6" lineHeight="1rem">
          Federated ReactJS
        </Typography>
        <Tooltip title="Visit my Linkedin page">
          <Typography color="textPrimary" variant="caption">
            by <Link href="https://www.linkedin.com/in/pavlovalor/">Pavlo Valor</Link>
          </Typography>
        </Tooltip>
      </Box>
      <Divider />
      <Stack direction="column" gap=".5rem" padding="1rem">
        <Typography color="textSecondary" variant="caption">
          NAVIGATION
        </Typography>
        <NavLink to="/">
          {({ isActive, isPending }) => (
            <LoadingButton
              style={{ justifyContent: 'flex-start' }}
              startIcon={isActive ? <GpsFixed /> : <GpsNotFixed />}
              loadingPosition="start"
              disabled={isActive}
              loading={isPending}
            >
              Application Root
            </LoadingButton>
          )}
        </NavLink>
        <NavLink to="/memes">
          {({ isActive, isPending }) => (
            <LoadingButton
              style={{ justifyContent: 'flex-start' }}
              startIcon={isActive ? <GpsFixed /> : <GpsNotFixed />}
              loadingPosition="start"
              disabled={isActive}
              loading={isPending}
            >
              Memes loader
            </LoadingButton>
          )}
        </NavLink>
      </Stack>
    </Box>
  );
};
