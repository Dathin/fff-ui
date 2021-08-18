import { Form, InterfaceRegistrableInputProps } from '../form';
import { CreateAccountRequest, useCreateAccount } from '../../hooks/useCreateAccount';


export function CreateProject(){

    const {execute: createAccount, unexpectedError, validationError, loading } = useCreateAccount();


    const onSubmit = async (createAccountRequest: CreateAccountRequest) => {
        createAccount(createAccountRequest);
    };

    const inputs: InterfaceRegistrableInputProps = [
        {
            registerName: 'name',
            label: 'Name',
        }
    ]

    return (
        <Form axiosResponse={{unexpectedError, validationError, loading}} onSubmit={onSubmit} inputs={inputs} buttonText="Create account" formName="Create Account"></Form>
    )
}