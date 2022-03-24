import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Routers
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { paths } from './routerPaths';

// Pages
import { LoginPage } from '../pages/auth';
import { MainLayout } from '../pages/dashboard/MainLayout';
import { HomePage } from '../pages/dashboard/MainModule';
import {
	AdminModuleMenuPage,
	AttributePage,
	CollaboratorCardPage,
	RolesPage,
	UsersPage 
} from '../pages/dashboard/AdminModule';
import {
	EvaluationDetailPage,
	EvaluationModuleMenuPage,
	EvaluationPage,
	MeetingDetailPage,
	MeetingsPage
} from '../pages/dashboard/EvaluationModule';
import {
	CollaboratorCardReportDetailPage,
	CollaboratorCardReportPage,
	MeetingsReportDetailPage,
	MeetingsReportPage,
	MultipleReportPage,
	ReportsModuleMenuPage,
	SingleReportDetailPage,
	SingleReportPage
} from '../pages/dashboard/ReportsModule';


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
						<Route path={paths.auth_login} element={ <LoginPage /> } />
						<Route path='*' element={ <Navigate replace to={`/${paths.auth_login}`} /> } />
					</Route>

					<Route element={ <PrivateRoutes isLoggedIn={ isLoggedIn } /> }>
						<Route element={ <MainLayout /> }>
							{/* Modulo principal */}
							<Route index element={ <HomePage/> } />
							{/* Modulo de Administracion */}
							<Route path={paths.admin_menu} element={ <AdminModuleMenuPage/> } />
							<Route path={paths.admin_usuarios} element={ <UsersPage/> } />
							<Route path={paths.admin_roles} element={ <RolesPage/> } />
							<Route path={paths.admin_tarjeta} element={ <CollaboratorCardPage/> } />
							<Route path={paths.admin_atributos} element={ <AttributePage/> } />
							{/* Modulo de Evaluacion */}
							<Route path={paths.evaluaciones_menu} element={ <EvaluationModuleMenuPage/> } />
							<Route path={paths.evaluaciones_reuniones} element={ <MeetingsPage/> } />
							<Route path={paths.evaluaciones_reuniones_detail+'/:id'} element={ <MeetingDetailPage/> } />
							<Route path={paths.evaluaciones_evaluar} element={ <EvaluationPage/> } />
							<Route path={paths.evaluaciones_evaluar_detail+'/:id'} element={ <EvaluationDetailPage/> } />
							{/* Modulo de Reportes */}
							<Route path={paths.reportes_menu} element={ <ReportsModuleMenuPage/> } />
							<Route path={paths.reportes_tarjeta} element={ <CollaboratorCardReportPage/> } />
							<Route path={paths.reportes_tarjeta_detail+'/:id'} element={ <CollaboratorCardReportDetailPage/> } />
							<Route path={paths.reportes_reuniones} element={ <MeetingsReportPage/> } />
							<Route path={paths.reportes_reuniones_detail+'/:id'} element={ <MeetingsReportDetailPage/> } />
							<Route path={paths.reportes_individual} element={ <SingleReportPage/> } />
							<Route path={paths.reportes_individual_detail+'/:id'} element={ <SingleReportDetailPage/> } />
							<Route path={paths.reportes_multiples} element={ <MultipleReportPage/> } />

							<Route path='*' element={ <Navigate replace to="/" /> } />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
    );
};