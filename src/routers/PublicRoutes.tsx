import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoutes = ({ isLoggedIn }: any): JSX.Element => {
    return isLoggedIn
        ? <Navigate to="/" />
        : <Outlet />
}
