import { Box, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, InterfaceRegistrableInputProps } from '../../components/form';
import { LOCAL_STORAGE } from '../../constants/localStorage';
import { LoginRequest, useLogin } from '../../hooks/useLogin';
import { useStyles } from './styles';

export function Signin() {
    let history = useHistory();
    const classes = useStyles();
    const {execute: login, data, unexpectedError, validationError, loading } = useLogin();
    
    useEffect(() => {
        if(data?.token) {
            localStorage.setItem(LOCAL_STORAGE.TOKEN, data.token);
            history.push('xD')
        }
    }, [data, history])

    const onSubmit = async (loginRequest: LoginRequest) => {
        login(loginRequest);
    };

    const inputs: InterfaceRegistrableInputProps = [
        {
            required: true,
            margin: 'normal',
            fullWidth: true,
            registerName: 'identifier',
            label: 'E-mail',
            type: 'email',
            variant: 'outlined',
        },
        {
            required: true,
            margin: 'normal',
            fullWidth: true,
            registerName: 'password',
            label: 'Password',
            type: 'password',
            variant: 'outlined',
        }
    ]

    return (
        <Box className={classes.root}>
            <Typography component="h1" variant="h5">Sign in</Typography>
            <Form axiosResponse={{unexpectedError, validationError, loading}} onSubmit={onSubmit} inputs={inputs}></Form>
        </Box>
    )
}