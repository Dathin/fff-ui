import { Button, CircularProgress, TextField, Snackbar, TextFieldProps } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { UnpackNestedValue, useForm } from 'react-hook-form';
import { UseAxiosResponse } from '../../hooks/useAxiosResponse';
import { useStyles } from './styles';

export type InterfaceRegistrableInputProps = (TextFieldProps & {registerName: string; })[]

interface FormProps <REQ, RES> {
    axiosResponse: Omit<UseAxiosResponse<REQ, RES>, 'execute' | 'data'>;
    onSubmit: (data: UnpackNestedValue<REQ>) => Promise<void>;
    inputs: InterfaceRegistrableInputProps;
    buttonText: string;
}

export function Form<REQ, RES>({axiosResponse, onSubmit, inputs, buttonText}: FormProps<REQ, RES>){
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const [openError, setOpenError] = useState<boolean>();
    const {unexpectedError, validationError, loading} = axiosResponse;
    

    useEffect(() => {
        setOpenError(!!unexpectedError);
    }, [unexpectedError])

    return (
            <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                {inputs.map(({registerName, variant, required, margin, fullWidth, ...rest}) => (
                    <TextField
                        key={registerName}
                        error={!!validationError[registerName]}
                        helperText={validationError[registerName]}
                        {...register(registerName)}
                        variant={variant ?? 'outlined'}
                        required={required ?? true}
                        margin={margin ?? 'normal'}
                        fullWidth={fullWidth ?? true}
                        {...rest}>
                    </TextField>
                ))}
                <Button className={classes.button} disabled={!!loading} type="submit" fullWidth variant="contained" color="primary">{loading ? <CircularProgress size="24px" color="primary" /> : buttonText}</Button>
            <Snackbar open={openError} autoHideDuration={5000} onClose={() => setOpenError(false)}>
                <Alert onClose={() => setOpenError(false)} severity="error">
                    {unexpectedError}
                </Alert>
            </Snackbar>
            </form>

    )
}