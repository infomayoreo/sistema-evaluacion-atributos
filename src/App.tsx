import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppRouter } from './routers/AppRouter';
import './assets/sass/App.scss';

export const App = (): JSX.Element => {
	return (
		<Provider store={ store }>
			<AppRouter />
		</Provider>
	);
}
