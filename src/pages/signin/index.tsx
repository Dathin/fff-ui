import { Box, Divider } from '@material-ui/core';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, InterfaceRegistrableInputProps } from '../../components/form';
import { ROUTES } from '../../constants/routes';
import { useUser } from '../../context/userContext';
import { SignInRequest, useSignIn } from '../../hooks/useSignIn';
import { useStyles } from './styles';

export function Signin() {
    const { signIn } = useUser();
    const classes = useStyles();
    let history = useHistory();
    const {execute: apiSignIn, data, unexpectedError, validationError, loading } = useSignIn();

    useEffect(() => {
        if(data?.token) {
            signIn(data.token);
        }
    }, [data, signIn])

    const onSubmit = async (signInRequest: SignInRequest) => {
        apiSignIn({...signInRequest, webClient: true});
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
            <Form axiosResponse={{unexpectedError, validationError, loading}} onSubmit={onSubmit} inputs={inputs} buttonText="Sign In" formName="Sign In"></Form>
            <Box className={classes.or} onClick={() => history.push(ROUTES.SIGNUP)}>
                <Divider />&nbsp;Or Sign Up&nbsp;<Divider />
            </Box>
        </>
    )
}