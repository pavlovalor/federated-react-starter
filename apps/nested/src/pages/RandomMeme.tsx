import * as React from 'react';
import { useImgur } from '../query-service';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Stack,
  Button,
  Typography,
  Rating,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useMemeHistoryStore } from 'shared/stores/meme-history';

export const Page: React.FC = () => {
  const { isLoading, isSuccess, data, refetch } = useImgur();
  const { add } = useMemeHistoryStore();

  if (isSuccess && data)
    return (
      <Card>
        <CardContent>
          <Typography variant="h6" textAlign="center">
            {data.title}
          </Typography>
          <Typography variant="caption" textAlign="center" component="p" color="textSecondary">
            {data.author}
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            height="30rem"
          >
            <img
              src={data.url}
              alt={data.title}
              style={{ maxWidth: '30rem', maxHeight: '30rem' }}
            />
          </Box>
        </CardContent>
        <Divider />

        <CardActionArea>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap="4rem"
            paddingY="1rem"
          >
            <Rating
              value={0}
              onChange={(_event, starts) => {
                add({
                  title: data.title,
                  author: data.author,
                  previewUrl: data.preview[0],
                  rating: Number(starts),
                });
                refetch();
              }}
            />
            <Button
              size="large"
              endIcon={<ArrowForward />}
              disabled={isLoading}
              onClick={() => refetch()}
            >
              Skip
            </Button>
          </Stack>
        </CardActionArea>
      </Card>
    );

  return null;
};
