import { Box, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, InterfaceRegistrableInputProps } from "../../components/form";
import { ROUTES } from "../../constants/routes";
import { SignUpRequest, useSignUp } from "../../hooks/useSignUp";
import { useStyles } from "./styles";

export function SignUp(){
    const classes = useStyles();
    let history = useHistory();
    const {execute: signUp, data, unexpectedError, validationError, loading } = useSignUp();

    useEffect(() => {
        if(data) {
            history.push(ROUTES.SIGNIN)
        }
    }, [data, history]);

    const onSubmit = async (signUpRequest: SignUpRequest) => {
        signUp(signUpRequest);
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
            <Typography component="h1" variant="h5">Sign up</Typography>
            <Form axiosResponse={{unexpectedError, validationError, loading}} onSubmit={onSubmit} inputs={inputs} buttonText="Sign up"></Form>
        </Box>
    )
}