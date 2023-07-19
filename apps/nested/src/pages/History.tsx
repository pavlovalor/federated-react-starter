import * as React from 'react';
import { useMemeHistoryStore } from 'shared/stores/meme-history';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Rating,
  Box,
  Button,
} from '@mui/material';
import { RemoveCircleOutline } from '@mui/icons-material';

export const Page: React.FC = () => {
  const { records, forget } = useMemeHistoryStore();
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Preview</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Added at</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(records).map(([id, record]) => (
            <TableRow key={id}>
              <TableCell>
                <Box overflow="hidden" height="2rem">
                  <img alt={record.title} src={record.previewUrl} />
                </Box>
              </TableCell>
              <TableCell>{record.title}</TableCell>
              <TableCell>{record.author}</TableCell>
              <TableCell>
                <Rating readOnly value={record.rating} />
              </TableCell>
              <TableCell>{new Date(record.timestamp).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button
                  variant="text"
                  color="warning"
                  startIcon={<RemoveCircleOutline />}
                  onClick={() => forget(id)}
                >
                  Forget
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
