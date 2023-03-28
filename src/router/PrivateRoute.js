import { Navigate } from "react-router-dom";
import PAGE_NAMES from "./paths";
import { useAuth } from 'hooks';

export const PrivateRoute = ({
    component: Component,
    redirectTo = PAGE_NAMES.homepage
}) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};