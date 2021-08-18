import {BrowserRouter as ReactRouter, Switch} from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { CustomRoute, CustomRouteProps } from './components/privateRoute';
import { ROUTES } from './constants/routes';
import { UserProvider } from './context/userContext';
import { Home } from './pages/home';
import { Main } from './pages/main';
import { Signin } from './pages/signin';
import { SignUp } from './pages/signup';

export function Router(){

    const routes: CustomRouteProps[] = [
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
            children: <Main />,
            path: ROUTES.MAIN,    
            exact: true,
            authenticated: true,
        },
        {
            children: <Home />,
            path: '*',    
        }
    ]

    return (
        <>
            <UserProvider>
                <Header />
            </UserProvider>
            <ReactRouter>
                <UserProvider>
                    <Switch>
                        {routes.map(({children, ...rest}, index) => (<CustomRoute key={index} {...rest}>{children}</CustomRoute>))}
                    </Switch>
                </UserProvider>
            </ReactRouter>
            <Footer />
        </>

    )
}