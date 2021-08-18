import { useEffect } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useUser } from "../../context/userContext";

export interface CustomRouteProps extends RouteProps{
    authenticated?: boolean;
}

export function CustomRoute({children, authenticated, path, location, ...rest}: CustomRouteProps){
    const { isAuthenticated } = useUser();
    console.log(isAuthenticated);
    const canAccessRoute = isAuthenticated || !authenticated;

    return canAccessRoute ? <Route {...rest}>{children}</Route> : <Redirect to={ROUTES.SIGNIN} />
}