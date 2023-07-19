import * as React from 'react';
import { Stack, IconButton, Typography, Tooltip, useTheme } from '@mui/material';
import { GitHub, Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeStore } from 'shared/stores/theme';

export const TopBar: React.FC = () => {
  const { palette } = useTheme();
  const themeStore = useThemeStore();

  return (
    <Stack direction="row" padding=".5rem" justifyContent="flex-end">
      <Typography lineHeight="2.5rem" variant="caption" color="textPrimary">
        {themeStore.mode} mode
      </Typography>
      <Tooltip title="Switch theme mode">
        <IconButton sx={{ ml: 1 }} color="inherit" onClick={themeStore.switch}>
          {palette.mode === 'dark' ? (
            <Brightness7 color="action" />
          ) : (
            <Brightness4 color="action" />
          )}
        </IconButton>
      </Tooltip>
      <Tooltip title="Visit repo github page">
        <a
          href="https://github.com/pavlovalor/federated-react-starter"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <GitHub color="action" />
          </IconButton>
        </a>
      </Tooltip>
    </Stack>
  );
};
