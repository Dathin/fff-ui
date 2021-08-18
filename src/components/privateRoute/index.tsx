import { useEffect } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useUser } from "../../context/userContext";

export interface CustomRouteProps extends RouteProps{
    authenticated?: boolean;
}

export function CustomRoute({children, authenticated, location, ...rest}: CustomRouteProps){
    const { isAuthenticated, setAfterLoginRoute } = useUser();

    const canAccessRoute = isAuthenticated || !authenticated;

    useEffect(() => {
        if (location?.pathname !== ROUTES.SIGNIN) {
            const lastValue = !canAccessRoute ? location?.pathname : undefined;
            setAfterLoginRoute(lastValue);
        }
    }, [canAccessRoute, setAfterLoginRoute, location]);


    return canAccessRoute ? <Route {...rest}>{children}</Route> : <Redirect to={ROUTES.SIGNIN} />
}