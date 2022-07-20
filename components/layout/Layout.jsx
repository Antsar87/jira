import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { Navbar, Sidebar } from '../ui';

export const Layout = (props) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{props.title || 'Jira'}</title>
      </Head>

      <Navbar />
      <Sidebar />
      
      <Box sx={{ padding: '10px 20px' }}>{props.children}</Box>
    </Box>
  );
};
