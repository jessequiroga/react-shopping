import React, { useContext, useCallback } from 'react';
import { Container, makeStyles, Paper } from '@material-ui/core';
import { firebaseService } from 'services/firebase';
import Typography from '@material-ui/core/Typography';
import { AuthContext } from 'services/AuthContext';
import ReactGoogleButton from 'react-google-button';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

export function LoginPage() {
    const classes = useStyles();
    const { user } = useContext(AuthContext);

    const signInWithGoogle = useCallback(() => {
        firebaseService.signInWithGoogle();
    }, []);

    return (
        <>
            {null !== user && <Redirect to="/" />}
            {null === user && (
                <Container maxWidth={'sm'}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <ReactGoogleButton
                            onClick={signInWithGoogle}
                            className={classes.button}
                        />
                    </Paper>
                </Container>
            )}
        </>
    );
}
