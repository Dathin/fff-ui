import { Box, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, InterfaceRegistrableInputProps } from '../../components/form';
import { LOCAL_STORAGE } from '../../constants/localStorage';
import { SignInRequest, useSignIn } from '../../hooks/useSignIn';
import { useStyles } from './styles';

export function Signin() {
    let history = useHistory();
    const classes = useStyles();
    const {execute: signIn, data, unexpectedError, validationError, loading } = useSignIn();
    
    useEffect(() => {
        if(data?.token) {
            localStorage.setItem(LOCAL_STORAGE.TOKEN, data.token);
            history.push('xD')
        }
    }, [data, history])

    const onSubmit = async (signInRequest: SignInRequest) => {
        signIn(signInRequest);
    };

    const inputs: InterfaceRegistrableInputProps = [
        {
            registerName: 'identifier',
            label: 'E-mail',
        },
        {
            registerName: 'password',
            label: 'Password',
            type: 'password',
        }
    ]

    return (
        <Box className={classes.root}>
            <Typography component="h1" variant="h5">Sign in</Typography>
            <Form axiosResponse={{unexpectedError, validationError, loading}} onSubmit={onSubmit} inputs={inputs} buttonText="Sign in"></Form>
        </Box>
    )
}