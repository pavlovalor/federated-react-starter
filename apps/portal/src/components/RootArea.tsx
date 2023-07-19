import * as React from 'react';
import { Stack, Typography, Rating, Box, Alert, AlertTitle } from '@mui/material';
import { useMemeHistoryStore } from 'shared/stores/meme-history';

export const RootArea: React.FC = () => {
  const { records } = useMemeHistoryStore();

  const avgRating = React.useMemo(
    () =>
      Object.values(records).reduce((acc, record) => acc + record.rating, 0) /
      Object.entries(records).length,
    [records]
  );

  return (
    <Stack padding="2rem" display="flex" gap="3rem" direction="row">
      <Stack gap=".5rem">
        <Typography component="legend" color="textPrimary">
          Average meme rating
        </Typography>
        <Typography variant="caption" color="textSecondary">
          <b>{Object.entries(records).length}</b> reactions given
        </Typography>
        <Rating value={avgRating ?? 0} readOnly precision={0.2} />
      </Stack>
      <Box marginLeft="auto">
        <Alert variant="outlined" severity="info">
          <AlertTitle>This area could be affected by nested applications. </AlertTitle>
          Such behaviour could be achieved via placement of store aside from the component tree.{' '}
          <br />
          See file structure:&nbsp;
          <Typography variant="caption" component="span">
            /packages/shared/stores
          </Typography>
        </Alert>
      </Box>
    </Stack>
  );
};
