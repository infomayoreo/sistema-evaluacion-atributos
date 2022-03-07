import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Routers
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

// Pages
import { MainLayout } from '../pages/dashboard/MainLayout';
import { LoginScreen } from '../pages';
import { useSelector } from 'react-redux';


export const AppRouter = (): JSX.Element => {

	const { uid } = useSelector( (state: any) => state.auth );

	// checking avoid the redirect of the page when refresh manually the page
	// or type the url directly
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [checking, setChecking] = useState(true);

	useEffect(() => {
		console.log('useEffect');
		if (uid) {
			setIsLoggedIn( true );
		} else {
			setIsLoggedIn( false );
		}
		setChecking(false);
	}, [uid]);

	console.log({isLoggedIn, checking})

	if ( checking ) {
		return (
            <div>
                <h1>Loading....</h1>
            </div>
		);
	}

    return (
			<> 
			<BrowserRouter>
				<Routes>
					<Route element={ <PublicRoutes isLoggedIn={ isLoggedIn } /> }>
						<Route path='login' element={ <LoginScreen /> } />
						{/* <Route path='*' element={ <Navigate replace to="/login" /> } /> */}
					</Route>

					<Route element={ <PrivateRoutes isLoggedIn={ isLoggedIn } /> }>
						<Route element={ <MainLayout /> }>
							<Route index element={ <h1>index</h1> } />
							<Route path='admin' element={ <h1>Admin</h1> } />
							<Route path='reuniones' element={ <h1>reuniones</h1> } />
							<Route path='reportes' element={ <h1>reportes</h1> } />
							<Route path='*' element={ <Navigate replace to="/" /> } />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
    );
};