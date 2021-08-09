import { Button, CircularProgress, TextField, Snackbar, TextFieldProps } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { UnpackNestedValue, useForm } from 'react-hook-form';
import { UseAxiosResponse } from '../../hooks/useAxiosResponse';

export type InterfaceRegistrableInputProps = (TextFieldProps & {registerName: string; })[]

interface FormProps <REQ, RES> {
    axiosResponse: Omit<UseAxiosResponse<REQ, RES>, 'execute' | 'data'>;
    onSubmit: (data: UnpackNestedValue<REQ>) => Promise<void>;
    inputs: InterfaceRegistrableInputProps
}

export function Form<REQ, RES>({axiosResponse, onSubmit, inputs}: FormProps<REQ, RES>){
    const { register, handleSubmit } = useForm();
    const [openError, setOpenError] = useState<boolean>();
    const {unexpectedError, validationError, loading} = axiosResponse;
    

    useEffect(() => {
        setOpenError(!!unexpectedError);
    }, [unexpectedError])

    return (
            <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                {/* <TextField required error={!!validationError.identifier} helperText={validationError.identifier} margin="normal" fullWidth {...register('identifier')} label="E-mail" type="email" variant="outlined"/> */}
                {/* <TextField required error={!!validationError.password} helperText={validationError.password} margin="normal" fullWidth {...register('password')} label="Password" type="password" variant="outlined"/> */}
                {/* <Button disabled={!!loading} className={classes.button} type="submit" fullWidth variant="contained" color="primary">{loading ? <CircularProgress size="24px" color="primary" /> : 'Sign in'}</Button> */}
                {inputs.map(({registerName, ...rest}) => (
                    <TextField key={registerName} error={!!validationError[registerName]} helperText={validationError[registerName]} {...register(registerName)} {...rest}></TextField>
                ))}
                <Button disabled={!!loading} type="submit" fullWidth variant="contained" color="primary">{loading ? <CircularProgress size="24px" color="primary" /> : 'Sign in'}</Button>
            <Snackbar open={openError} autoHideDuration={5000} onClose={() => setOpenError(false)}>
                <Alert onClose={() => setOpenError(false)} severity="error">
                    {unexpectedError}
                </Alert>
            </Snackbar>
            </form>

    )
}