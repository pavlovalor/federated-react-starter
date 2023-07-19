import * as React from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  colors,
  type PaletteMode,
} from '@mui/material';
import { useThemeStore } from 'shared/stores/theme';

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { mode } = useThemeStore();
  const theme = React.useMemo(
    () => createTheme({ palette: { mode: mode.toLowerCase() as PaletteMode } }),
    [mode]
  );

  React.useEffect(() => {
    document.body.style.backgroundImage =
      mode === 'Dark'
        ? `linear-gradient(to right, ${colors.blueGrey.A700}, ${colors.blueGrey[900]})`
        : `linear-gradient(to right, ${colors.common.white}, ${colors.cyan[50]})`;
  }, [mode]);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
