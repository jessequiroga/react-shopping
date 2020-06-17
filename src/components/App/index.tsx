import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { Container, Box } from '@material-ui/core';

import { Top } from 'components';

export function App() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Top></Top>
                <Typography variant="h4" component="h1" gutterBottom>
                    learn learn
                </Typography>
            </Box>
        </Container>
    );
}
