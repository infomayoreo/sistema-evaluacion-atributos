import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = ({ isLoggedIn }: any): JSX.Element => {
    return isLoggedIn
        ? <Outlet />
        : <Navigate to="/login" />
}
