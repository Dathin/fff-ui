import {BrowserRouter as ReactRouter, Route, RouteProps, Switch} from 'react-router-dom';
import { ROUTES } from './constants/routes';
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
            children: <h1>F</h1>,
            path: '*',    
            exact: true,
        }
    ]

    return (
        <ReactRouter>
            <Switch>
                {routes.map((route, index) => (<Route key={index} {...route}></Route>))}
            </Switch>
        </ReactRouter>
    )
}