import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export function LoginPage() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Login
            </Typography>
            <Typography variant="body1" gutterBottom>
                Login please
            </Typography>
        </Container>
    );
}
