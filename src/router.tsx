import {BrowserRouter as ReactRouter, Route, RouteProps, Switch} from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { ROUTES } from './constants/routes';
import { UserProvider } from './context/userContext';
import { CreateAccount } from './pages/createAccount';
import { Home } from './pages/home';
import { Signin } from './pages/signin';
import { SignUp } from './pages/signup';

export function Router(){

    const routes: RouteProps[] = [
        {
            children: <Signin />,
            path: ROUTES.SIGNIN,
            exact: true,
        },
        {
            children: <SignUp />,
            path: ROUTES.SIGNUP,    
            exact: true,
        },
        {
            children: <CreateAccount />,
            path: ROUTES.CREATE_ACCOUNT,    
            exact: true,
        },
        {
            children: <Home />,
            path: '*',    
            exact: true,
        }
    ]

    return (
        <>
            <Header />
            <ReactRouter>
                <UserProvider>
                    <Switch>
                        {routes.map(({children, ...rest}, index) => (<Route key={index} {...rest}>{children}</Route>))}
                    </Switch>
                </UserProvider>
            </ReactRouter>
            <Footer />
        </>

    )
}