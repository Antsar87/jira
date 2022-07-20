import React, { useContext, useMemo } from 'react';

import { List, Paper } from '@mui/material';

import { EntryCard } from './';

import { EntriesContext } from '../../context/entries';

export const EntryList = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesbyStatus = useMemo(
    () => entries.filter((item) => item.status === status),
    [entries, status]
  );

  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 250px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          padding: 2,
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesbyStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
