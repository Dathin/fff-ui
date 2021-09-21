import { Form, InterfaceRegistrableInputProps } from '../../components/form';
import { useMain } from '../../context/mainContext';
import { AccountResponse, useAccounts } from '../../hooks/useAccounts';
import { CreateAccountRequest, useCreateAccount } from '../../hooks/useCreateAccount';


export function CreateAccount(){

    const { setAccounts } = useMain();
    const {execute: createAccount, unexpectedError, validationError, loading, data } = useCreateAccount();


    const onSubmit = async (createAccountRequest: CreateAccountRequest) => {
        await createAccount(createAccountRequest);
        setAccounts([data as any])
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