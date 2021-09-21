import { Box, Divider } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, InterfaceRegistrableInputProps } from "../../components/form";
import { ROUTES } from "../../constants/routes";
import { useUser } from "../../context/userContext";
import { SignUpRequest, useSignUp } from "../../hooks/useSignUp";
import { useStyles } from "./styles";

export function SignUp(){

    const classes = useStyles();
    const { isAuthenticated } = useUser()
    let history = useHistory();
    const {execute: signUp, data, unexpectedError, validationError, loading } = useSignUp();

    useEffect(() => {
        if(data) {
            history.push(ROUTES.SIGNIN)
        }
    }, [data, history]);

    useEffect(() => {
        if(isAuthenticated) {
            history.push(ROUTES.MAIN)
        }
    }, [isAuthenticated, history])


    const onSubmit = async (signUpRequest: SignUpRequest) => {
        signUp({...signUpRequest, webClient: true});
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
            <Form axiosResponse={{unexpectedError, validationError, loading}} onSubmit={onSubmit} inputs={inputs} buttonText="Sign up" formName="Sign Up" />
            <Box className={classes.or} onClick={() => history.push(ROUTES.SIGNIN)}>
                <Divider />&nbsp;Or Sign In&nbsp;<Divider />
            </Box>
        </>
    )
}