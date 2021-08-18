import { Box, Divider } from '@material-ui/core';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, InterfaceRegistrableInputProps } from '../../components/form';
import { LOCAL_STORAGE } from '../../constants/localStorage';
import { ROUTES } from '../../constants/routes';
import { SignInRequest, useSignIn } from '../../hooks/useSignIn';
import { useStyles } from './styles';

export function Signin() {
    const classes = useStyles();
    let history = useHistory();
    const {execute: signIn, data, unexpectedError, validationError, loading } = useSignIn();
    
    useEffect(() => {
        if(data?.token) {
            localStorage.setItem(LOCAL_STORAGE.TOKEN, data.token);
            history.push(ROUTES.CREATE_ACCOUNT)
        }
    }, [data, history])

    const onSubmit = async (signInRequest: SignInRequest) => {
        signIn({...signInRequest, webClient: true});
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
        <>
            <Form axiosResponse={{unexpectedError, validationError, loading}} onSubmit={onSubmit} inputs={inputs} buttonText="Sign in" formName="Sign in"></Form>
            <Box className={classes.or} onClick={() => history.push(ROUTES.SIGNUP)}>
                <Divider />&nbsp;Or Sign Up&nbsp;<Divider />
            </Box>
        </>
    )
}